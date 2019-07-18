import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
        <h2>
          Häufig gestellte Fragen
        </h2>
        <p>
          Wir beantworten hier häufig gestellte Fragen und Dinge, die uns
          während der Vorbereitung aufgefallen sind. Um eigene Fragen
          einzusenden wendet euch bitte an
          <a href="mailto:info@freestyledm2019.de">info@freestyledm2019.de</a>.
        </p>
        <details>
          <summary><h3>Wie melde ich eine Gruppenkür an?</h3></summary>
          <p>
            Zu Beginn der Anmeldung gab es keine Möglichkeit eine Gruppenkür in
            (Junior-)Expert anzumelden. Dieser Fehler wurde behoben und alle
            Gruppenkürfahrer gebeten ihre Anmeldungen zu kontrollieren.
          </p>
          <p>
            Die Anmeldung zu einer Gruppenkür funktioniert genau wie bei einer
            Einzel oder Paarkür über das IUF Tool. Wichtig hierbei ist, dass
            alle Teammitglieder den eindeutigen Kürnamen genau gleich schreiben
            um uns viel Arbeit abzunehmen (z.B. "Die Klapperstörche",
            "Klapperstörche", "die Klapperstörche" und "SSV Googlehupf - Die
            Klapperstörche" sind im ersten Moment vier unterschiedliche Küren).
            Zudem müssen sich alle Fahrer in der Altersklasse des <b>ältesten</b> Gruppenmitglieds melden.
          </p>
          <p>
            <b>Wichtig:</b> Nachdem ihr eure Gruppe angemeldet habt sendet uns
            bitte noch eine Mail an
            <a href="mailto:grossgruppe@freestyledm2019.de"
              >grossgruppe@freestyledm2019.de</a
            >
            mit dem Namen der Kür und allen Fahrern damit wir im Zweifelsfall
            Probleme leichter beheben können. Bitte hängt eure Kürmusik <b>nicht</b> als Anhang an diese Mail.
          </p>
          <p>
            Für Eure Mail könnt ihr zum Beispiel folgendes Format wählen:
          </p>
          <blockquote>
            Hallo Freestyle DM 2019 Team,<br />
            hier die Sicherheitsanmeldung für unsere Klein-/Großgruppenkür:<br />
            Kategorie: Großgruppe / Junior Expert<br />
            Kürname: "Kürname Kürname"<br />
            Fahrer:<br />
            <ul>
              <li>Albert Bertelsmann</li>
              <li>Carina Deen</li>
              <li>Emilia Fisch</li>
              <li>Gustav Hans</li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary><h3>Muss jeder Fahrer die Kürmusik hochladen?</h3></summary>
          <p>
            Nein!
          </p>
          <p>
            Es reicht wenn wir für jede Kür von einem Fahrer die Kürmusik
            erhalten. Am Wettbewerb wird unser Musikteam die aktuellste Version
            der Musik (welche vor dem Stichtag in der Ausschreibung hochgeladen
            wurde) nutzen. Am Wettbewerb erhaltet ihr die Möglichkeit (/ müsst
            ihr) eure Musik einmal beim Musikteam abnehmen, damit wir sicher
            gehen können, dass wir die richtige Musik haben (Vergesst nicht eure
            Musik auf einem USB-Stick mitzubringen!).
          </p>
          <p>
            Das Musikteam garantiert nur die aktuellste Version der Musik am
            Wettbewerbstag zur Verfügung stellen zu können. Früher hochgeladene
            Versionen haben wir eventuell nicht vor Ort.
          </p>
        </details>
        <details>
          <summary><h3>Erhalte ich eine Antwort auf meine Juryanmeldung?</h3></summary>
          <p>
            Wir freuen uns, wenn Ihr uns schon früh mitteilt, wer uns im Juryteam unterstützen kann, allerdings ist auch von unserer Seite aus noch vieles zu erledigen und daher kann es sein, dass wir nicht direkt auf eure Juryanmeldungen antworten.
          </p>
          <p>
            Wir werden nach der Anmeldephase auf alle Vereine/Trainer zukommen und diese per Mail wegen der Jurymitglieder kontaktieren. Ab diesem Zeitpunkt werden wir uns garantiert bei euch melden und eure Jurybeteiligung bestätigen.
          </p>
        </details>
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