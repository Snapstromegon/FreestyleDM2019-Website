export default class SnapLink extends HTMLAnchorElement {
  constructor() {
    super();
    this.addEventListener('click', (...args) => this.clicked(...args));
  }

  get active() {
    return this.hasAttribute('active');
  }

  set active(value) {
    if (Boolean(value)) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }

  clicked(e) {
    e.preventDefault();
    document.querySelector('snap-routed').go(this.href);
  }
}

window.customElements.define('snap-link', SnapLink, { extends: 'a' });
