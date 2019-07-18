import '../SnapDevider/SnapDevider.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<div class="content">
  <h2>
    Was ist "Zum Startbildschirm hinzufügen"?
  </h2>
  <p>
    Wie auch schon bei der ODM 2019 möchten wir euch auch bei der Freestyle DM 2019 mit dem neusten Stand der Technik den Wettbewerbsablauf erleichtern. Hierzu haben wir unter anderem diese Website entworfen, welche euch vor und während des Wettkampfes unterstützen soll.
  </p>
  <p>
    Wenn ihr unsere Website zum Startbildschirm hinzufügt könnt ihr diese nicht nur schneller wiederfinden, sondern diese wie eine App nutzen (ohne die Adresszeile oben).
  </p>
  <p>
    Diese Website kann übrigens noch mehr. Hier noch einige unserer Features:
    <ul>
      <li><strong>Offline lesen:</strong> Jede Seite, die du schonmal aufgerufen hast ist ab da an auch offline verfügbar.</li>
      <li><strong>Benachrichtigungen:</strong> Du kannst in der Startliste am unteren Ende markieren, welcher Starter dich interessiert und dann wirst du kurz vor seinem Start benachrichtigt.</li>
    </ul>
  </p>

  <snap-add-to-homescreen></snap-add-to-homescreen>
</div>
`;

export default class SnapPWA extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-pwa', SnapPWA);