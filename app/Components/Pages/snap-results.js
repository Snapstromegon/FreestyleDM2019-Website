import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
        <h2>
          Ergebnisse
        </h2>
        <h3><a href="/res/pdf/Ergebnisse_ODM_einzel.pdf">Einzelküren</a></h3>
        <h3><a href="/res/pdf/Ergebnisse_ODM_paar.pdf">Paarküren</a></h3>
        <h3><a href="/res/pdf/Ergebnisse_ODM_gruppe.pdf">Gruppenküren</a></h3>
      </div>
`;

export default class SnapFaQ extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-faq', SnapFaQ);