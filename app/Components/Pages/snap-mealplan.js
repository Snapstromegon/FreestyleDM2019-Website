import '../SnapDevider/SnapDevider.js';
import '../SnapHeader/SnapHeader.js';
import '../SnapAddToHomescreen/snap-add-to-homescreen.js';

export const template = document.createElement('template');

template.innerHTML = `
<snap-devider></snap-devider>
<snap-add-to-homescreen></snap-add-to-homescreen>
<div class="content">
  <h2>Essensplan</h2>
  <h3>Imbisswagen</h3>
  <table class="beginn_table">
    <tbody>
    <tr>
      <td>Pommes Frites</td>
      <td>2,00€</td>
    </tr>
    <tr>
      <td>Bratwurst</td>
      <td>2,00€</td>
    </tr>
    <tr>
      <td>Currywurst</td>
      <td>2,50€</td>
    </tr>
    </tbody>
  </table>

  
  <h3>Salatbar</h3>
  <table class="beginn_table">
    <tbody>
    <tr>
      <td>Salattasche</td>
      <td>3,00€</td>
    </tr>
    <tr>
      <td>Großer Salat</td>
      <td>3,00€</td>
    </tr>
    </tbody>
  </table>
  
  <h3>Grillwagen</h3>
  <table class="beginn_table">
    <tbody>
    <tr><td>Nackensteak</td><td>3,00€</td></tr>
    <tr><td>Lummersteak</td><td>3,00€</td></tr>
    <tr><td>Geflügelsteak</td><td>3,00€</td></tr>
    </tbody>
  </table>
  
  <h3>Mittagstisch (12:00 - 14:00)</h3>
  <table class="beginn_table">
    <tbody>
    <tr><td>Nudelpfanne (vegetarisch)</td><td>4,00€</td></tr>
    </tbody>
  </table>
  
  <h3>Cafeteria</h3>
  <table class="beginn_table">
    <tbody>
    <tr><td>1/2 belegtes Brötchen</td><td>0,50€</td></tr>
    <tr><td>Kuchen</td><td>1,00€</td></tr>
    <tr><td>Obstspieß</td><td>1,00€</td></tr>
    <tr class="table_devider"><td>Snack (verschiedene)</td><td>0,50€</td></tr>
    <tr><td>Kaffee / Tee</td><td>1,00€</td></tr>
    <tr><td>Cola / Fanta / Wasser / Apfelschorle</td><td>1,50€</td></tr>
    <tr><td>Kölsch / Black / Radler</td><td>2,00€</td></tr>
    <tr><td>Radler Alkoholfrei</td><td>2,00€</td></tr>
    </tbody>
  </table>
      </div>
`;

export default class SnapMealplan extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-mealplan', SnapMealplan);
