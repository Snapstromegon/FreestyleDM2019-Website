import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
        <h1>
          Zeitplan
        </h1>
        <br>
        <h2>Freitag</h2>
        <table class="beginn_table">
          <caption>
            Freitag
          </caption>
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>Klasse</th>
              <th>Start</th>
              <th>Dauer</th>
              <th>Belegung</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table_devider">
              <td>Öffnung Warmfahrhalle</td>
              <td></td>
              <td>12:00</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="12" class="table_devider">Einzelkür W</td>
              <td>U11 / U12</td>
              <td>12:50</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">U11</td>
              <td class="table_devider">13:00</td>
              <td class="table_devider">00:20</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U12</td>
              <td>13:20</td>
              <td>00:02</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">13:22</td>
              <td class="table_devider">00:20</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U13</td>
              <td>13:42</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">13:52</td>
              <td class="table_devider">00:30</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U15</td>
              <td>14:22</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">14:32</td>
              <td class="table_devider">00:50</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U16</td>
              <td>15:22</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">15:32</td>
              <td class="table_devider">01:00</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U17</td>
              <td>16:32</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">16:42</td>
              <td class="table_devider">00:42</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr class="table_devider">
              <td>Siegerehrung</td>
              <td>Einzel bis einschl. W U16</td>
              <td>17:24</td>
              <td>00:30</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="6" class="table_devider">Einzelkür W</td>
              <td rowspan="2" class="table_devider">U19</td>
              <td>17:54</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">18:04</td>
              <td class="table_devider">01:00</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U22</td>
              <td>19:04</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">19:14</td>
              <td class="table_devider">00:48</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">Über 22</td>
              <td>20:02</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">20:12</td>
              <td class="table_devider">00:36</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td>Ende</td>
              <td></td>
              <td>20:48</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <br>
        <h2>Samstag</h2>
        <table class="beginn_table">
          <caption>
            Samstag
          </caption>
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>Klasse</th>
              <th>Start</th>
              <th>Dauer</th>
              <th>Belegung</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table_devider">
              <td>Öffnung Warmfahrhalle</td>
              <td></td>
              <td>07:30</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4" class="table_devider">Einzelkür M</td>
              <td class="table_devider">Junior Expert / Expert</td>
              <td>07:50</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">Junior Expert</td>
              <td class="table_devider">08:00</td>
              <td class="table_devider">00:08</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">Expert</td>
              <td>08:08</td>
              <td>00:02</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">08:10</td>
              <td class="table_devider">01:04</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="4" class="table_devider">Einzelkür W</td>
              <td rowspan="2" class="table_devider">Junior Expert</td>
              <td>09:14</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">09:24</td>
              <td class="table_devider">01:00</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">Expert</td>
              <td>10:24</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">10:34</td>
              <td class="table_devider">01:20</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr class="table_devider">
              <td>Siegerehrung</td>
              <td>Einzel ab W U17 bis einschl. Über 22</td>
              <td>11:54</td>
              <td>00:30</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="18" class="table_devider">Paarkür</td>
              <td rowspan="2" class="table_devider">U13</td>
              <td>12:24</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">12:34</td>
              <td class="table_devider">00:40</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U14</td>
              <td>13:14</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">13:24</td>
              <td class="table_devider">00:25</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U15</td>
              <td>13:49</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">13:59</td>
              <td class="table_devider">00:35</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U16</td>
              <td>14:34</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">14:44</td>
              <td class="table_devider">01:00</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U17</td>
              <td>15:44</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">15:54</td>
              <td class="table_devider">00:36</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U19</td>
              <td>16:30</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">16:40</td>
              <td class="table_devider">00:48</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U21</td>
              <td>17:28</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">17:38</td>
              <td class="table_devider">00:30</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">U24</td>
              <td>18:08</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">18:18</td>
              <td class="table_devider">00:36</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">Über 24</td>
              <td>18:54</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">19:04</td>
              <td class="table_devider">00:36</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr class="table_devider">
              <td>Siegerehrung</td>
              <td>Einzel Expert und Paar bis einschl. Über 24</td>
              <td>19:40</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Ende</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <br>
        <h2>Sonntag</h2>
        <table class="beginn_table">
          <caption>
            Sonntag
          </caption>
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>Klasse</th>
              <th>Start</th>
              <th>Dauer</th>
              <th>Belegung</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table_devider">
              <td>Öffnung Warmfahrhalle</td>
              <td></td>
              <td>07:30</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4" class="table_devider">Paarkür</td>
              <td rowspan="2" class="table_devider">Junior Expert</td>
              <td>07:50</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">08:00</td>
              <td class="table_devider">00:30</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">Expert</td>
              <td>08:30</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">08:40</td>
              <td class="table_devider">01:28</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="4" class="table_devider">Kleingruppe</td>
              <td rowspan="2" class="table_devider">Junior Expert</td>
              <td>10:08</td>
              <td>00:20</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">10:28</td>
              <td class="table_devider">00:56</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">Expert</td>
              <td>11:24</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">11:34</td>
              <td class="table_devider">02:00</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="4" class="table_devider">Großgruppe</td>
              <td rowspan="2" class="table_devider">Junior Expert</td>
              <td>13:34</td>
              <td>00:20</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">13:54</td>
              <td class="table_devider">00:40</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr>
              <td rowspan="2" class="table_devider">Expert</td>
              <td>14:34</td>
              <td>00:10</td>
              <td>Einfahrzeit</td>
            </tr>
            <tr>
              <td class="table_devider">14:44</td>
              <td class="table_devider">01:40</td>
              <td class="table_devider">Wettkampf</td>
            </tr>
            <tr class="table_devider">
              <td>Siegerehrung</td>
              <td>Paar ab Junior Expert + Gruppen</td>
              <td>16:24</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Ende</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
`;

export default class SnapTimeplan extends HTMLElement{
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-timeplan', SnapTimeplan);