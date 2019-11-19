import '../SnapDevider/SnapDevider.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';
import '../SnapHeader/SnapHeader.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-header></snap-header>
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
        <h2>
          Hallo und willkommen auf den Seiten der diesjährigen Freestyle DM in
          Nümbrecht
        </h2>

        <h3><a href="https://konstantinhoehne.de/2019/11/videos-dm-freestyle-nuembrecht/">Livestream / Videos</a></h3>
        <h3><a href="https://photos.google.com/share/AF1QipOMWaXTE8NgSxdFdsZqQAtX7G1LWUJC1pnup230Qsrpdtow-DqXLFLFI2_O4ij3KA?key=clNkaHZCXzVnRzlPV1k1S1JzZGhJMWlySHloUW53">Bilder Freitag</a></h3>
        <h3><a href="https://photos.app.goo.gl/P3ZZWJ3FzFMwWZGJA">Bilder Samstag</a></h3>

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