import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';
import '../SnapUtils/snap-info.js';
import '../SnapUtils/snap-warning.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-header></snap-header>
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
        <h1>Ausschreibung</h1>
        <snap-info>
          Diese Ausschreibung gibt es auch als PDF<br>
          <a href="./res/pdf/Ausschreibung Freestyle DM2019.pdf">PDF Version</a><br>
          <a href="./res/pdf/Ausschreibung Freestyle DM2019 Druckfreundlich.pdf">PDF Druckversion</a>
        </snap-info>
        <h2>Allgemeine Informationen</h2>
        <snap-warning>
        <strong >Anmeldeschluss:
          <br/>
          18.08.2019</strong >
        </snap-warning>
        <div class="iconboxCollection">
          <div class="iconbox half">
            <div class="iconbox__icon">
              <i class="material-icons">place</i><br/>
              Ort
            </div>
            <div class="iconbox__content">
              GWN Arena<br/>
              Gouvieuxstraße<br/>
              51588 Nümbrecht
            </div>
          </div>
          <div class="iconbox half">
            <div class="iconbox__icon">
              <i class="material-icons">supervisor_account</i><br/>
              Ausrichter<br/>
              Veranstalter
            </div>
            <div class="iconbox__content">
              <strong>SSVNümbrecht Turnen2010e.V.</strong>
              unterstützt vom
              <strong>
                <a href="https://einradverband.de" target="_blank" rel="noopener">Einradverband Deutschland e.V. (EVD)</a>
              </strong>
            </div>
          </div>
          <div class="iconbox">
            <div class="iconbox__icon">
              <i class="material-icons">date_range</i><br/>
              Beginn
            </div>
            <div class="iconbox__content">
              <table class="beginn_table">
                <tbody>
                  <tr>
                    <td rowspan="3" class="table_devider">Freitag</td>
                    <td class="right">12:00</td>
                    <td>Einfahrhalle zum Warmfahren geöffnet</td>
                  </tr>
                  <tr>
                    <td class="right">12:30</td>
                    <td>Juryeinweisung</td>
                  </tr>
                  <tr class="table_devider">
                    <td class="right">13:00</td>
                    <td>Wettkampfstart</td>
                  </tr>
                  <tr>
                    <td rowspan="3">Samstag /<br>Sonntag</td>
                    <td class="right">7:30</td>
                    <td>Einfahrhalle zum Warmfahren geöffnet</td>
                  </tr>
                  <tr>
                    <td class="right">8:00</td>
                    <td>Juryeinweisung</td>
                  </tr>
                  <tr>
                    <td class="right">8:30</td>
                    <td>Wettkampfstart</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="iconbox">
            <div class="iconbox__icon">
              <i class="material-icons">timeline</i><br/>
              Zeitplan
            </div>
            <div class="iconbox__content">
              <table class="beginn_table">
                <tbody>
                  <tr>
                    <td>Freitag</td>
                    <td>Einzelküren</td>
                  </tr>
                  <tr>
                    <td>Samstag</td>
                    <td>Einzel- und Paarküren</td>
                  </tr>
                  <tr>
                    <td>Sonntag</td>
                    <td>Paar- und Gruppenküren</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h2>Starter</h2>
        <p>
          <strong>
            Anmelden können sich alle interessierten Einradfahrer, die die deutsche Staatsbürgerschaft oder ihren Hauptwohnsitz in Deutschland oder deren Vereine ihren Sitz in Deutschland haben. Der Deutsche Meistertitel kann bei Einzel- und Paarküren nur an Teilnehmer mit deutscher Staatsangehörigkeit verliehen werden. Gruppen können deutscher Meister werden, wenn mindestens 51% der Teilnehmer die deutsche Staatsangehörigkeit besitzen.
          </strong>
        </p>
        <p>
          Die Trainer sind dafür verantwortlich, dass die Starter Tricks wie Stand-up-Gliden, Hop on Wheel, Dragseat, Stand-up-Wheelwalk, Crossover, Unispin oder ähnlich schwierige Tricks beherrschen.
        </p>
          <snap-info>
            <strong>
              Die Anzahl der Startplätze ist begrenzt.
            </strong>
            Teilnehmer müssen bei Überschreitung der maximalen Starterzahl in einer Startgruppe auf Nachfrage ein Video einer aktuellen Kür und ihre Vorplatzierungen in 2017-2019 einreichen.
            <strong>Achtung</strong>: Videos müssen bis spätestens eine Woche nach Meldeschluss, also bis zum 25.08.2019 vorliegen, um am Auswahlverfahren teilnehmen zu können. Bei den Expert-Kleingruppen (15+) ist die Teilnahme begrenzt auf 1 Kür und bei den Expert-Großgruppen auf max. 2 Küren pro Verein/pro Kader.
          </snap-info>
        <h2>Kampfrichter</h2>
        <p>
          Aus organisatorischen Gründen ist es wichtig, dass
          <u>jeder</u>
          teilnehmende Verein alle verfügbaren Juroren bei der Online-Anmeldung angibt. Falls ein Verein keine Jurymitglieder stellen kann, wendet er sich bitte an:
          <a href="mailto://jury@freestyledm2019.de">jury@freestyledm2019.de</a >. Die Mindestanzahl ist abhängig von der Teilnehmerzahl.
        </p>
        <p>
          Bitte tragt die Kampfrichter in der Onlineanmeldung mit Email-Adresse ein, damit wir sie kontaktieren können, danke!
          <u >
            <strong >Die Teilnahme an der Juryeinweisung am Wettkampftag ist verbindlich.</strong >
          </u >
        </p>
        <div class="center">
          <table>
            <thead>
              <th>Anzahl der Fahrer</th>
              <th>Zahl der Juroren</th>
            </thead>
            <tbody>
              <tr>
                <td>1-4</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5-10</td>
                <td>2</td>
              </tr>
              <tr>
                <td>11-20</td>
                <td>3</td>
              </tr>
              <tr>
                <td>21-30</td>
                <td>4</td>
              </tr>
              <tr>
                <td>über 30</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Altersgruppen und Startbedingungen</h2>
        <p>
          Nach den IUF-Regeln richtet sich die Alterseinordnung nach dem Geburtstag des Teilnehmers. Ausschlaggebend ist das Alter am ersten Tag des Wettkampfes (hier: 15. November 2019. Innerhalb der Wettkampfgruppe (Paar oder Gruppe) gilt nach IUF das Alter des ältesten Gruppenmitgliedes als maßgebend.
        </p>
          <snap-info>
            <strong>
              Altersnachweis
            </strong><br/>
            Personalausweis oder Pass ist auf Nachfrage vorzulegen
          </snap-info>
        <p>
          Jeder Teilnehmer darf nur einmal in jeder Disziplin (Einzel, Paar, Klein-Gruppe und Groß-Gruppe)antreten. Insgesamt kann ein Teilnehmer also an max. 4 Disziplinen teilnehmen. Vereinsübergreifende Küren sind möglich.
        </p>
        <div class="scroller">
          <table class="center">
            <thead>
              <tr>
                <th>Altersgruppe</th>
                <th>U11</th>
                <th>U13</th>
                <th>U15</th>
                <th>Junior Expert</th>
                <th>U17</th>
                <th>17+</th>
                <th>Expert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Einzel weibl.<br/>Einzel männl.<br/>Paar</th>
                <td>Max.
                  <br/>2 min</td>
                <td>Max.
                  <br/>2 min</td>
                <td>Max.
                  <br/>2 min</td>
                <td>Max.
                  <br/>3 min</td>
                <td>Max.
                  <br/>3 min</td>
                <td>Max.
                  <br/>3 min</td>
                <td>Max.
                  <br/>4 min</td>
              </tr>
              <tr>
                <th>Kleingruppe<br/>3-8 TN</th>
                <td colspan="3"></td>
                <td>Max.
                  <br/>4 min</td>
                <td colspan="2"></td>
                <td>Max.
                  <br/>5 min</td>
              </tr>
              <tr>
                <th>Großgruppe<br/>ab 9 TN</th>
                <td colspan="3"></td>
                <td>Max.
                  <br/>5 min</td>
                <td colspan="2"></td>
                <td>Max.
                  <br/>5 min</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Bei geringen oder zu hohen Anmeldezahlen in manchen Kategorien können Altersklassen zusammengelegt werden bzw. geteilt werden. Klein- und Großgruppen dürfen nicht zusammengelegt werden. Weiblich und männlich wird bei den Einzeldisziplinen in jedem Fall getrennt gewertet.
        </p>
        <h2>Meistertitel</h2>
        <p>
          Deutsche Meistertitel werden an die Sieger in den Expert-Klassen, Deutsche Junioren-Meistertitel an die Sieger in den Junior-Expert-Klassen vergeben. (Einzel m/w getrennt.)
        </p>
        <p>
          Die Gewinner der Altersklassen dürfen sich „Sieger in der entsprechenden Altersklasse“ nennen.
        </p>
        <h2>Medaillen / Urkunden</h2>
        <p>
          Sieger in den einzelnen Wettkampfgruppen (1., 2. und 3. Platz) erhalten eine Medaille. Meister-Sieger der Junior-Expert und Expertküren erhalten einen Pokal. Jeder Teilnehmer erhält eine Urkunde mit seiner Platzierung.
        </p>
        <h2>Einsprüche</h2>
        <p>
          Einsprüche zu den Wertungen können nur innerhalb von 60 Minuten nach Bekanntgabe der Ergebnisse schriftlich am Auswertungstisch eingelegt werden.
        </p>
        <h2>Möglichkeiten der Darbietungen</h2>
        <p>
          Verschiedene Einräder sind möglich, auch Seile, Bänder, Schirme usw. Es dürfen keine spitzen Gegenstände benutzt werden oder solche, die Verletzungen verursachen können.
        </p>
        <h2>Fahrflächenbegrenzung / Hallenboden / Einradeinschränkung</h2>
        <p>
          Der Hallenboden ist ein Sportboden, gut mit dem Einrad zu befahren. Bitte
          <strong>keine Munibereifung</strong>
          (schwarzer Abrieb) und Metallpedalen! Die Einräder sollten vor Betreten der Halle von Sand und Steinen gesäubert werden.
          <strong>Die Fahrfläche beträgt min. 28 x 15 m</strong>. Der gesamte verfügbare Raum darf genutzt werden. Die Halle hat eine Tribüne, die für Zuschauer angedacht ist. Eintritt ist frei.
        </p>

        <h2>Verpflegung</h2>
        <p>
          Für das leibliche Wohl wird mit Speisen und Getränken zu günstigen Preisen vom ausrichtenden Verein gesorgt.
        </p>
        <h2>Übernachtung</h2>
        <p>
          Für Übernachtungen stehen den Teilnehmern und Begleitern die in unmittelbarer Nähe gelegene Grundschule zur Verfügung. Die Kosten für Übernachtungen liegen bei
          <strong>10,-EUR pro Person/pro Nacht</strong>, inklusive einem reichhaltigen Frühstück. Dies kann bei der Online-Anmeldung mit angegeben werden. Darüber hinaus findet ihr weitere Übernachtungsmöglichkeiten hier:
          <a href="https://www.nuembrecht.de" target="_blank" rel="noopener">www.nuembrecht.de</a>
        </p>
        <h2>Anmeldung</h2>
        <p>
          Wir nutzen das
          <strong>IUF-Online-Anmeldetool</strong>, das von unserer Seite (<a href="https://anmeldung.freestyledm2019.de" target="_blank" rel="noopener">anmeldung.freestyledm2019.de</a >) aus erreichbar ist. Hier kann auch die Musik hochgeladen werden.
        </p>
        <p>
          Ein Moderationsbogen ist auf derselben Seite abrufbar und sollte am Wettkampftag bitte rechtzeitig am Musiktisch abgegeben werden.
        </p>
        <p>
          <strong >Zusätzlich sollen die Trainer bitte jeweils Teilnehmer-Listen ihrer Gruppenküren (mit Angabe des Kürnamens) an
            <a href="mailto://grossgruppe@freestyledm2019.de">grossgruppe@freestyledm2019.de</a >
            schicken.</strong >
        </p>
        <p>
          Spätestens bei Meldeschluss sind die Namen aller Teilnehmer zu nennen! Nur in medizinischen Notfällen ist das Einwechseln eines altersmäßig passenden Ersatzfahrers möglich.
        </p>
          <snap-warning>
            <strong >Anmeldeschluss:
              <br/>
              18.08.2019</strong >
          </snap-warning>
        <h2>Startgelder pro Teilnehmer</h2>
        <table>
          <tbody>
            <tr>
              <td>Einzelkür</td>
              <td class="right">8,00€</td>
            </tr>
            <tr>
              <td>Paarkür</td>
              <td class="right">7,00€</td>
            </tr>
            <tr>
              <td>Gruppenkür</td>
              <td class="right">6,00€</td>
            </tr>
          </tbody>
        </table>
          <snap-warning>
            Startgelder und Übernachtungskosten bitte
            <strong>bis zum 25.10.2019 überweisen</strong>. Die notwendigen
            <strong>Zahlungsinformationen werden ab 20.08.2019</strong>
            mit der finalen Startplatzzusage an alle Teilnehmer per Mail versendet!
          </snap-warning>
        <p>
          <strong>Startgebühren können nicht zurückerstattet werden!</strong>
        </p>
        <h2>Startreihenfolge</h2>
        <p>
          Die Startreihenfolge wird ca. zwei Wochen vor dem Wettkampf veröffentlicht.
        </p>
        <h2>Kürmusik</h2>
        <p>
          Wir möchten beim Wettkampf gern die Kürmusik über den PC abspielen. Dafür ladet ihr bitte spätestens
          <strong>bis zum 25.10.2019</strong>
          eure Kürmusik
          <strong>als MP3-Datei via Online-Anmeldetool</strong>
          hoch.
        </p>
        <h3>Wichtige zur Musik</h3>
        <ul>
          <li>
            <span>
              Bitte sorgt für eine gute Qualität der Musik! (min. 192 kBit/s)
            </span>
          </li>
          <li>
            <span>
              Bitte benennt die Musikdatei eindeutig mit Kürnamen und Verein, damit eine Verwechslung ausgeschlossen ist.
            </span>
          </li>
          <li>
            <span>
              Bitte achtet unbedingt auf die richtige Version, falls ihr mehrere Versionen von eurer Musik habt!
            </span>
          </li>
          <li>
            <p>
              Zusätzlich solltet ihr
              <strong >
                <u>zur Sicherheit die Kürmusik auf einem USB-Stick</u>
              </strong >
              im Wettkampf bereithalten.
            </p>
          </li>
        </ul>
          <snap-info>
            <p>
              Wir veröffentlichen auf der Website des Einradverband Deutschland in den Start- und Ergebnislisten die Namen der Teilnehmer (und Verein/Gruppe etc.). Außerdem stellen wir auch Bilder und Videos der Veranstaltung für euch ein.
            </p>
            <p>
              Für Diebstähle, Unfälle oder sonstige Schadensfälle übernimmt der Veranstalter und der Eigentümer der Halle keinerlei Haftung.
            </p>
            <p>
              Durch die Anmeldung erklären sich Teilnehmer damit einverstanden, dass ihre Namen, Resultate und Bild- und Videomaterial von der Veranstaltung im Internet, Print und Fernsehen veröffentlicht werden und akzeptieren den obigen Haftungsausschluss.
            </p>
            <p>
              Wir bitten die Trainer dringend, die Teilnehmer/Eltern möglichst schriftlich darauf hinzuweisen!
            </p>
          </snap-info>
        <h2>Kontakt</h2>
        <p>SSV Nümbrecht Einrad,<br>Peter Kaufmann</p>
        <table class="white half">
          <tbody>
            <tr>
              <td>Website</td>
              <td>
                <a href="https://freestyledm2019.de">freestyledm2019.de</a>
              </td>
            </tr>
            <tr>
              <td>Mobil</td>
              <td>0151 26956577</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto://info@freestyledm2019.de">info@freestyledm2019.de</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
`;

export default class SnapAusschreibung extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-ausschreibung', SnapAusschreibung);