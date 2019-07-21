export const template = document.createElement('template');

template.innerHTML = `
<style>
:host{
  display: block;
  overflow: auto;
}
:host([hiden]){
  display: none;
}
*{
  padding: 0;
  margin: 0;
}
.starter{
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: "fahrer kategorie markiert" "fahrer startzeit markiert" "kürname startnummer markiert";
  align-items: center;
  grid-gap: 0 1rem;
  padding: .5rem 0;
  border-top: .1rem solid #fff4;
  list-style: none;
}
.starter:first-child{
  border: none;
}
.fahrer{
  grid-area: fahrer;
}
.kategorie{
  grid-area: kategorie;
  text-align: right;
}
.startzeit{
  grid-area: startzeit;
  text-align: right;
}
.kürname{
  grid-area: kürname;
}
.startnummer{
  grid-area: startnummer;
  text-align: right;
}
.markiert{
  grid-area: markiert;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
}
.markiert .is_marked{
  display: none;
}
.markiert .is_marked ~ span:before{
  content: 'star_outline';
  transition: color .3s;
}
.markiert .is_marked:checked ~ span:before{
  content: 'star';
  color: var(--color-yellow);
}
ol {
  padding: 0 1rem;
}
</style>
<ol>
<!--<li class="starter">
  <h2 class="fahrer">Kim Lilien Höser</h2>
  <p class="kategorie">EW U19</p>
  <p class="startzeit">15:45</p>
  <p class="kürname">Toller Kürname</p>
  <p class="startnummer">103</p>
  <label class="markiert"><input type="checkbox" class="is_marked"/><span></span></label>
</li>-->
</ol>
`;

export default class SnapStartlist extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('snap-startlist', SnapStartlist);
