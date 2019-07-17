import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-header></snap-header>
<snap-devider></snap-devider>
<div class="content">
        <h2>
          Hallo und willkommen auf den Seiten der diesjährigen Freestyle DM in
          Nümbrecht
        </h2>
        <p>
          Wir freuen uns über dein Interesse an unserer Veranstaltung und wollen
          dir auf unserer Homepage alle Informationen zur Verfügung stellen, die
          für den Besuch oder die Teilnahme an unserer Meisterschaft 2019
          nützlich sind.
        </p>
        <p>
          Falls trotzdem Fragen offen bleiben kannst du dich jederzeit an
          folgende E Mail Adresse wenden:
          <a href="mailto:info@freestyledm2019.de">info@freestyledm2019.de</a>.
        </p>
        <p>
          Bis bald in unserem schönen Luftkurort!
          <br />
          Dein Orga Team vom SSV Nümbrecht
        </p>
      </div>
`;

export default class SnapHome extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-home', SnapHome);