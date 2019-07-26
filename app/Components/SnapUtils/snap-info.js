export const template = document.createElement('template');

template.innerHTML = `
<style>

:host {
  display: flex;
  background: var(--color-blue);
  align-items: center;
  margin: 1rem 0rem;
}

.icon {
  width: 6rem;
  text-align: center;
  color: #fff;
  flex-shrink: 0;
}
.icon i {
  font-size: 2rem;
}

.info__content {
  padding: 0.5rem;
  background-color: #eee;
  width: 100%;
}
</style>
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
  rel="stylesheet"
/>
<div class="icon">
            <i class="material-icons">info</i>
          </div>
          <div class="info__content">
           <slot></slot>
          </div>
`;

export default class SnapInfo extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-info', SnapInfo);