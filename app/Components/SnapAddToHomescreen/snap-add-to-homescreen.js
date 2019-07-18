import '../SnapRouter/snap-link.js';
export let installToHomescreenPrompt;

export const template = document.createElement('template');

template.innerHTML = `
<style>
:host {
  display: none;
}

:host([visible]){
  display: block;
}
.content {
  padding: 1rem;
  margin: auto;
  max-width: 850px;
  box-sizing: border-box;
}
.installButton{
  display: flex;
  box-sizing: border-box;
  width: 100%;
  background: var(--color-blue-light);
  color: #fff;
  border-radius: .5rem;
}

#installToHomescreen{
  height: 100%;
  flex-grow: 1;
  font-size: 1.2rem;
  background: none;
  color: #fff;
  padding: 1rem;
  border: none;
}
a {
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
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  border-left: .1rem dotted #fff;
}
</style>
<div class="content">
  <div class="installButton">
    <button id="installToHomescreen">Zum Startbildschirm hinzufügen</button>
    <a is="snap-link" href="/pwa" class="material-icons">help</a>
  </div>
</div>
`;

export default class SnapAddToHomescreen extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot
      .querySelector('#installToHomescreen')
      .addEventListener('click', () => this.prompt());
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      installToHomescreenPrompt = e;
      this.show();
    });
    if(installToHomescreenPrompt){
      this.show();
    }
  }

  show() {
    this.setAttribute('visible', '');
  }

  async prompt() {
    installToHomescreenPrompt.prompt();
    const userChoice = await installToHomescreenPrompt.userChoice;
    if (userChoice.outcome === 'accepted') {
      console.log('Installed to Homescreen');
    } else {
      console.log('Homescreen install rejected!');
    }
  }
}

window.customElements.define('snap-add-to-homescreen', SnapAddToHomescreen);
