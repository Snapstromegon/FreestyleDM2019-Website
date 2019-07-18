import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
  <h1>Karte des Wettkampfes</h1>
  <iframe src="https://www.google.com/maps/d/embed?mid=1W99kGX95VLFSPbf3UCcs4YmdCGIk8mmt" class="gmaps"></iframe>
</div>
`;

export default class SnapMap extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-map', SnapMap);