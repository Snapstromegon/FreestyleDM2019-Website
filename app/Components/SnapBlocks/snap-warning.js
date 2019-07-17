export const template = document.createElement('template');

template.innerHTML = `
<style>

:host {
  display: flex;
  background: var(--color-red);
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

.warning__content {
  padding: 0.5rem;
  background-color: var(--color-yellow);
  width: 100%;
}

</style>
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
  rel="stylesheet"
/>
<div class="icon">
  <i class="material-icons">warning</i>
</div>
<div class="warning__content">
  <slot></slot>
</div>
`;

export default class SnapWarning extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-warning', SnapWarning);