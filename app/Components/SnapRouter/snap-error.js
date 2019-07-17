import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<div class="content">
  <!--<p>Ein wildes 404 - wie hast du denn das gefunden?</p>
  <p>Aber leider gibt es hier nichts.</p>-->
  <p>Ein Fehler ist aufgetreten.</p>
  <p>Entweder ist hier nichts oder du bist offline.</p>
</div>
`;

export default class SnapError extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-error', SnapError);