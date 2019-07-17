import ErrorTag from './snap-error.js';
import './snap-loading.js';

const template = document.createElement('template');

template.innerHTML = `
<style>
:host{
  position: relative;
  display: block;
}
snap-loading{
  position: absolute;
  width: 100%;
}
</style>
<snap-loading></snap-loading>
<slot></slot>
`;

export default class SnapRouted extends HTMLElement {
  constructor() {
    super();
    this.routes = [];
    this.errorTag = ErrorTag;
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.loadingElement = shadowRoot.querySelector('snap-loading');
    this.loadingElement.loading = true;
    window.addEventListener('popstate', (...args) => this.popped(...args));
    window.addEventListener('load', (...args) => this.navigate(window.location.href));
  }

  popped(e) {
    this.navigate(e.state.url);
  }

  go(url) {
    history.pushState({ url }, url, url);
    return this.navigate(url);
  }

  async navigate(url) {
    const matchedRoute = await this.findRoute(url);
    this.updateLinks();
    this.loadingElement.loading = true;
    this.innerHTML = '';
    let defaultTag;
    if(matchedRoute){
      try{
        defaultTag = (await import(matchedRoute.module)).default;
      } catch(e){
        console.error(e);
        defaultTag = this.errorTag;
      }
    } else {
      defaultTag = this.errorTag;
    }
    this.appendChild(new defaultTag());
    this.loadingElement.loading = false;
  }

  updateLinks(){
    document.querySelectorAll('a[is=snap-link]').forEach(link => {
      link.active = window.location == link.href;
    });
  }

  addRoute(path, module) {
    const addedRoute = new Route(path, module);
    this.routes.push(addedRoute);
  }

  async findRoute(url) {
    return this.routes.find(route => route.matches(url));
  }
}

class Route {
  constructor(path, module) {
    this.path = path;
    this.module = module;
  }

  /**
   *
   * @param {String} url
   */
  matches(url) {
    return url.match(this.path) != null;
  }
}

window.customElements.define('snap-routed', SnapRouted);
