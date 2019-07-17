export const template = document.createElement('template');

template.innerHTML = `
<style>

h1,
h2 {
  font-weight: 300;
}

header {
  background: var(--color-blue, #333);
  color: #fff;
  position: relative;
  overflow: hidden;
}

header .content {
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
}

header .content div {
  margin-top: 2rem;
}

header .content div * {
  transform: rotate(-7deg);
  transform-origin: 0%;
  text-align: center;
}

header h1 {
  font-size: 2rem;
}

header h2 {
  font-size: 1.5rem;
}

header h1,
header h2 {
  margin-bottom: 0;
  margin-top: 0;
}

header #logo {
  width: 300px;
  max-width: 66%;
}
</style>
<header>
<div class="content">
  <img
    id="logo"
    src="res/img/logo_light.svg"
    alt="Logo Deutsche Meisterschaft im Einrad Freestyle 2019"
    loading="lazy"
  />
  <div>
    <h1>Deutsche Meisterschaft</h1>
    <h1>Einrad Freestyle</h1>
    <h2>SSV Nümbrecht</h2>
    <h2>15. - 17. November 2019</h2>
  </div>
</div>
</header>
`;

export default class SnapHeader extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-header', SnapHeader);