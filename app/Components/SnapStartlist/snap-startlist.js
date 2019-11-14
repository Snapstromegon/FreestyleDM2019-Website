import SnapStartlistCategory from './snap-startlist-category.js';
import './snap-startlist-start.js';
import '../SnapUtils/snap-ripple.js';

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
:host-context(*) .expand_label{
  display: flex;
}
slot{
  display: none;
  overflow: auto;
}
#preview{
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto;
  grid-template-areas: "main expand_button";
  overflow: hidden;
  flex-shrink: 0;
}
#preview[hidden]{
  display: none;
}
.expand_label{
  grid-area: expand_button;
  display: none;
  height: 100%;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  color: #fff;
  padding-left: 1rem;
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
#search snap-ripple{
  width: 100%;
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
  :host-context(*) .expand_label{
    display: none;
  }
}
</style>
<div id="preview">
  <snap-startlist-start id="current" nostar></snap-startlist-start>
  <div id="search"><snap-ripple><input type="search" id="search_field" list="search_filter" placeholder="Suchen" aria-label="Suchen"></snap-ripple></div>
  <snap-ripple><label class="expand_label material-icons"><input type="button" id="expand_button"><span></span></label></snap-ripple>
</div>
<slot></slot>
<datalist id="search_filter">
</datalist>
`;

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
    console.log("update startlist");
    const resp = await fetch(
      `https://startlists.freestyledm2019.de/timeplan/json?withoutPast=true`,
      { mode: 'cors', cache: 'no-cache' }
    );
    let apiStartlist = await resp.json();
    apiStartlist = apiStartlist.filter(e => e.data && e.data.start);
    const startlist = [];
    let currentCategory = undefined;
    for (const apiStartlistEntry of apiStartlist) {
      const entry = {
        category:
          apiStartlistEntry.data.event + ' ' + apiStartlistEntry.data.category
      };
      if (!currentCategory) {
        currentCategory = {
          category: entry.category,
          shortname:
            apiStartlistEntry.data.event[0] +
            ' ' +
            apiStartlistEntry.data.category,
          startlist: []
        };
      }
      if (currentCategory.category != entry.category) {
        startlist.push(currentCategory);
        currentCategory = {
          category: entry.category,
          shortname:
            apiStartlistEntry.data.event[0] +
            ' ' +
            apiStartlistEntry.data.category,
          startlist: []
        };
      }
      currentCategory.startlist.push({
        starters: apiStartlistEntry.data.start.Registrants.map(r => {
          return { name: r.User.name };
        }),
        start: new Date(
          apiStartlistEntry.started || apiStartlistEntry.expectedStartTime
        ),
        startnumber: apiStartlistEntry.data.start.orderPosition,
        name: apiStartlistEntry.data.start.actName,
        id: apiStartlistEntry.data.start.id
      });
    }
    startlist.push(currentCategory);
    this.render(startlist);
    // console.log(apiStartlist, startlist);
    window.setTimeout(() => this.load(), 5000);
  }

  updateFilter() {
    this.filter = this.root.querySelector('#search_field').value;
  }

  get filter() {
    return this.getAttribute('filter');
  }

  set filter(value) {
    this.querySelectorAll('snap-startlist-category').forEach(
      c => (c.filter = value)
    );
    return this.setAttribute('filter', value);
  }

  toggleExpand() {
    document.querySelector('aside').toggleAttribute('expanded');
  }

  render(data) {
    this.removeAttribute('empty');
    this.innerHTML = '';
    const firstStarterCategory = this.getFirstCategoryWithStarter(data);
    const searchDataList = this.root.querySelector('#search_filter');
    searchDataList.innerHTML = '';
    const inSearchDataList = {};
    if (!data || !data.length) {
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
    const actnames = document.createElement('optgroup');
    actnames.label = 'Kürname';
    const groupnames = document.createElement('optgroup');
    groupnames.label = 'Gruppenname';
    const starters = document.createElement('optgroup');
    starters.label = 'Starter';
    for (const startcategory of data) {
      this.appendChild(new SnapStartlistCategory(startcategory));
      for (const start of startcategory.startlist) {
        if (!(start.name in inSearchDataList)) {
          inSearchDataList[start.name] = true;
          const option = document.createElement('option');
          option.value = start.name;
          actnames.appendChild(option);
        }
        if (start.groupname && !(start.groupname in inSearchDataList)) {
          inSearchDataList[start.groupname] = true;
          const option = document.createElement('option');
          option.value = start.groupname;
          groupnames.appendChild(option);
        }
        for (const starter of start.starters) {
          if (!(starter.name in inSearchDataList)) {
            inSearchDataList[starter.name] = true;
            const option = document.createElement('option');
            option.value = starter.name;
            starters.appendChild(option);
          }
        }
      }
      searchDataList.appendChild(starters);
      searchDataList.appendChild(actnames);
      searchDataList.appendChild(groupnames);
    }
  }

  getFirstCategoryWithStarter(data) {
    return data.find(c => c.startlist.length);
  }
}

window.customElements.define('snap-startlist', SnapStartlist);
