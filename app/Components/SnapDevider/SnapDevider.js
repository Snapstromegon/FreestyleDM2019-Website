export const template = document.createElement('template');

template.innerHTML = `
<style>
.devider {
  --devider-bar-height: 1rem;
  overflow: hidden;
  position: relative;
  padding-top: calc((var(--devider-bar-height) * 2) + 12.2785%);
  position:sticky;
  top: 0px;
  z-index: 1;
}

.devider-blue {
  bottom: 100%;
  padding-top: 100%;
  background-color: var(--color-blue);
}
.devider-red {
  background-color: var(--color-red);
  top: 0px;
}
.devider-yellow {
  background-color: var(--color-yellow);
  top: var(--devider-bar-height);
}
.devider-blue,
.devider-red,
.devider-yellow {
  position: absolute;
  transform-origin: 100% 0%;
  transform: skew(0, -7deg);
  width: 100%;
  height: var(--devider-bar-height);
}

@media (min-width: 850px) {
  .devider {
    position: relative;
  }
}
</style>
<div class="devider">
<div class="devider-blue"></div>
<div class="devider-red"></div>
<div class="devider-yellow"></div>
</div>
`;

export default class SnapDevider extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-devider', SnapDevider);