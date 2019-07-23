import SnapStartlistStart from './snap-startlist-start.js';

export const template = document.createElement('template');

template.innerHTML = `
<style>
:host{
  display: block;
  display: contents;
  overflow: auto;
  margin-bottom: 1rem;
}
:host([hidden]){
  display: none;
}
#categoryname{
  position: sticky;
  top: 0px;
  padding: .5rem 1rem;
  margin: 0;
  background: var(--color-blue-light);
}
</style>
<p id="categoryname"></p>
<slot></slot>
`;

export default class SnapStartlistCategory extends HTMLElement {
  constructor(categoryData) {
    super(); // always call super() first in the constructor.
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    this.render(categoryData);
  }

  get filter(){
    return this.getAttribute('filter');
  }

  set filter(value){
    this.querySelectorAll('snap-startlist-start').forEach(c => c.filter = value);
    if(!this.querySelector('snap-startlist-start:not([hidden])')){
      this.setAttribute('hidden', '');
    } else {
      this.removeAttribute('hidden');
    }
    return this.setAttribute('filter', value);
  }

  render(data){
    this.root.querySelector('#categoryname').textContent = data.category;
    for(const start of data.startlist){
      this.appendChild(new SnapStartlistStart(start));
    }
  }
}

window.customElements.define('snap-startlist-category', SnapStartlistCategory);
