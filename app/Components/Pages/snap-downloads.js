import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
  <h2>Downloads</h2>
  <a href="./res/pdf/Ausschreibung Freestyle DM2019.pdf">Ausschreibung</a><br>
  <a href="./res/pdf/Ausschreibung Freestyle DM2019 Druckfreundlich.pdf">Ausschreibung - Druckfreundlich</a><br>
  <a href="./res/pdf/Moderationsbogen.pdf">Moderationsbogen</a><br>
  <a href="./res/pdf/Infoblatt%20Teilnehmer%20DM19.pdf">Infoblatt Teilnehmer</a>
</div>
`;

export default class SnapDownloads extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-downloads', SnapDownloads);