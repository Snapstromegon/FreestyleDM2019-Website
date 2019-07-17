import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-header></snap-header>
<snap-devider></snap-devider>
<div class="content">
  <h1>Impressum</h1>
  <p>Angaben gemäß § 5 TMG</p>
  <p>Raphael Höser
    <br>
  </p>
  <p>
    <strong>Kontakt:</strong>
    <br>
    E-Mail:
    <a href="mailto:raphael@hoeser.info">raphael@hoeser.info</a><br></p>
  <p>
    <strong>Haftungsausschluss:
    </strong><br><br>
    <strong>Haftung für Links</strong><br><br>
    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br>
    <strong>Datenschutz</strong><br><br>
    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
    <br>
    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
    <br>
    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
    </p><br>
  Website Impressum erstellt durch
  <a href="https://www.impressum-generator.de" rel="noreferrer">impressum-generator.de</a>
  von der
  <a href="https://www.kanzlei-hasselbach.de/" rel="noreferrer">Kanzlei Hasselbach</a>
  <br><br>
  <strong>Nutzung von CloudFlare</strong><br>
  <p>Zur Absicherung dieser Website und Optimierung der Ladezeiten wird CloudFlare als CDN („Content Delivery Network“) genutzt. Daher werden zwangsweise auch alle Anfragen durch deren Server geleitet und zu nicht deaktivierbaren Statistiken konsolidiert. Die gesammelten Rohdaten werden dort nach eigenen Angaben i. d. R. innerhalb von 4 Stunden, spätestens nach 3 Tagen, wieder gelöscht. Hier finden Sie Informationen zu den dort gesammelten Daten und zu Sicherheit & Datenschutz bei CloudFlare.</p>

</div>
`;

export default class SnapImpressum extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-impressum', SnapImpressum);