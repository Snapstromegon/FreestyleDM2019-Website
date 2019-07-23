import SnapStartlistCategory from './snap-startlist-category.js';
import SnapStartlistStart from './snap-startlist-start.js';

export const template = document.createElement('template');

template.innerHTML = `
<style>
:host{
  display: flex;
  flex-direction: column;
  overflow: auto;
}
:host([hidden]), :host([empty]){
  display: none;
}
:host-context([expanded]) #current{
  transform: translate(0, -100%);
}
:host-context([expanded]) #search{
  transform: translate(0, 0);
}
:host-context([expanded]) slot{
  display: initial;
}
:host-context([expanded]) .expand_label span:before{
  content: 'expand_less';
}
slot{
  display: none;
  overflow: auto;
}
#preview{
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto;
  padding-right: 1rem;
  grid-template-areas: "main expand_button";
  overflow: hidden;
  flex-shrink: 0;
}
#preview[hidden]{
  display: none;
}
.expand_label{
  grid-area: expand_button;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  color: #fff;
}
#expand_button{
  display: none;
}
.expand_label span:before{
  content: 'expand_more';
}
#current, #search {
  grid-area: main;
  transition: transform .5s;
}
#search{
  transform: translate(0, 100%);
  padding: 1rem;
  display: flex;
  align-items: center;
}
#search span:after{
  content: 'search';
}
#search_field{
  height: 100%;
  width: 100%;
  background: var(--color-blue-grey);
  border: none;
  color: #fff;
  padding: .5rem;
  box-sizing: border-box;
}
#search_field::placeholder{
  color: #bbb;
}
.material-icons, #search span:after{
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
}
@media (min-width: 850px) {
  #current{
    transform: translate(0, -100%);
  }
  #search{
    transform: translate(0, 0);
  }
  #preview{
    padding: 0;
  }
  slot{
    display: initial;
  }
  .expand_label{
    display: none;
  }
}
</style>
<div id="preview">
  <snap-startlist-start id="current" nostar></snap-startlist-start>
  <div id="search"><input type="search" id="search_field" list="search_filter" placeholder="Suchen" aria-label="Suchen"></div>
  <label class="expand_label material-icons"><input type="button" id="expand_button"><span></span></label>
</div>
<slot></slot>
<datalist id="search_filter">
</datalist>
`;

let dummy_startlist = [];
let dummy_startlist_ = [];
dummy_startlist = [
  {
    category: 'Einzel Weiblich U19',
    shortname: 'EW U19',
    startlist: [
      {
        starters: [{ name: 'Kim Lilien Höser' }],
        start: '15:45',
        startnumber: 103,
        name: 'Toller Kürname'
      },
      {
        starters: [{ name: 'Swantje Wickert' }],
        start: '15:45',
        startnumber: 103,
        name: 'Schneemann'
      }
    ]
  },
  {
    category: 'Paar Weiblich 19+',
    shortname: 'EW 19+',
    startlist: [
      {
        starters: [{ name: 'Kim Lilien Höser' }, { name: 'Swantje Wickert' }],
        start: '15:50',
        startnumber: 103,
        name: 'Paarkür'
      }
    ]
  },
  {
    category: 'Großgruppe Expert',
    shortname: 'GG E',
    startlist: [
      {
        starters: [{ name: 'Kim Lilien Höser' }, { name: 'Swantje Wickert' }],
        start: '15:50',
        startnumber: 103,
        name: 'Paarkür',
        groupname: 'SSV Nümbrecht'
      }
    ]
  }
];

export default class SnapStartlist extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    this.root
      .querySelector('#expand_button')
      .addEventListener('click', e => this.toggleExpand(e), { passive: true });
    this.root
      .querySelector('#search_field')
      .addEventListener('input', e => this.updateFilter(e), { passive: true });
    this.load();
  }

  async load() {
    const startlist = dummy_startlist;
    this.render(startlist);
  }

  updateFilter() {
    this.filter = this.root.querySelector('#search_field').value;
  }

  get filter(){
    return this.getAttribute('filter');
  }

  set filter(value){
    this.querySelectorAll('snap-startlist-category').forEach(c => c.filter = value);
    return this.setAttribute('filter', value);
  }

  toggleExpand() {
    document.querySelector('aside').toggleAttribute('expanded');
  }

  render(data) {
    this.removeAttribute('empty');
    const firstStarterCategory = this.getFirstCategoryWithStarter(data);
    const searchDataList = this.root.querySelector('#search_filter');
    searchDataList.innerHTML = '';
    const inSearchDataList = {};
    if(!data || !data.length){
      this.setAttribute('empty', '');
      return;
    }
    if (firstStarterCategory) {
      this.root
        .querySelector('#current')
        .render(
          firstStarterCategory.startlist[0],
          firstStarterCategory.shortname
        );
    } else {
      this.root.querySelector('#current').render();
    }
    for (const startcategory of data) {
      this.appendChild(new SnapStartlistCategory(startcategory));
      for (const start of startcategory.startlist) {
        if (!(start.name in inSearchDataList)) {
          inSearchDataList[start.name] = true;
          const option = document.createElement('option');
          option.value = start.name;
          option.textContent = 'Kürname';
          searchDataList.appendChild(option);
        }
        if (!(start.groupname in inSearchDataList)) {
          inSearchDataList[start.groupname] = true;
          const option = document.createElement('option');
          option.value = start.groupname;
          option.textContent = 'Gruppenname';
          searchDataList.appendChild(option);
        }
        for (const starter of start.starters) {
          if (!(starter.name in inSearchDataList)) {
            inSearchDataList[starter.name] = true;
            const option = document.createElement('option');
            option.value = starter.name;
            option.textContent = 'Starter';
            searchDataList.appendChild(option);
          }
        }
      }
    }
  }

  getFirstCategoryWithStarter(data) {
    return data.find(c => c.startlist.length);
  }
}

window.customElements.define('snap-startlist', SnapStartlist);
