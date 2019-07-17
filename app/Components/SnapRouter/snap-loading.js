import '../SnapDevider/SnapDevider.js';

export const template = document.createElement('template');

template.innerHTML = `
<style>
:host {
  opacity: 0;
}
:host([loading]){
  opacity: 1;
}
p {
  text-align: center;
}
#spinner{
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;
  border-radius: 50%;
  border: .25rem solid #ddd;
  border-top-color: #888;
  animation: spin 1s infinite;
  margin-top: 2rem;
}
@keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<snap-devider></snap-devider>
<div id="spinner">
</div>
`;

export default class SnapLoading extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));
  }

  get loading(){
    return this.hasAttribute('loading');
  }

  set loading(value){
    if(Boolean(value)){
      this.setAttribute('loading', '');
    } else {
      this.removeAttribute('loading');
    }
  }
}

window.customElements.define('snap-loading', SnapLoading);