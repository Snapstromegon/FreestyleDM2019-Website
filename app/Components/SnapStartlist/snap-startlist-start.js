export const template = document.createElement('template');

template.innerHTML = `
<style>
:host{
  display: block;
  overflow: auto;
}
:host([hidden]){
  display: none;
}
*{
  padding: 0;
  margin: 0;
}
.start{
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: "fahrer kategorie markiert" "fahrer startzeit markiert" "kürname startnummer markiert";
  align-items: center;
  grid-gap: 0 1rem;
  padding: .5rem 0;
  border-top: .1rem solid #fff4;
  list-style: none;
  margin: 0 1rem;
}
:host(:first-child) .start{
  border: none;
}
:host([nostar]) .start{
  grid-template-columns: 1fr auto;
  grid-template-areas: "fahrer kategorie" "fahrer startzeit" "kürname startnummer";
}
.fahrer{
  grid-area: fahrer;
}
.startzeit{
  grid-area: startzeit;
  text-align: right;
}
.kategorie{
  grid-area: kategorie;
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
:host([nostar]) .markiert{
  display: none;
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
</style>
<div class="start">
  <h2 class="fahrer"></h2>
  <p class="kategorie"></p>
  <p class="startzeit"></p>
  <p class="kürname"></p>
  <p class="startnummer"></p>
  <label class="markiert"><input type="checkbox" class="is_marked"/><span></span></label>
</div>
`;

export default class SnapStartlistStart extends HTMLElement {
  constructor(start) {
    super(); // always call super() first in the constructor.
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    this.matchingFilterValues = [];
    if (start) this.render(start);
  }

  get filter() {
    return this.getAttribute('filter');
  }

  set filter(value) {
    let matchesFilter = false;
    for (const candidate of this.matchingFilterValues) {
      if(candidate.toLowerCase().includes(value.toLowerCase())){
        matchesFilter = true;
      }
    }
    if (matchesFilter) {
      this.removeAttribute('hidden');
    } else {
      this.setAttribute('hidden', '');
    }
    this.setAttribute('filter', value);
  }

  render(data, kategorie) {
    this.matchingFilterValues = [];
    if (!data) {
      this.setAttribute('hidden', '');
      return;
    }
    this.removeAttribute('hidden');
    this.matchingFilterValues.push(
      data.name,
      ...data.starters.map(starter => starter.name)
    );
    this.root.querySelector('.fahrer').textContent = data.starters
      .map(s => s.name)
      .join(', ');
    this.root.querySelector('.kategorie').textContent = kategorie;
    this.root.querySelector('.startzeit').textContent = data.start;
    this.root.querySelector('.kürname').textContent = data.name;
    this.root.querySelector('.startnummer').textContent = `#${
      data.startnumber
    }`;
  }
}

window.customElements.define('snap-startlist-start', SnapStartlistStart);
