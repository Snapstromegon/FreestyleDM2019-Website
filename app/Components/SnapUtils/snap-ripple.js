const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host() {
      display: contents:
    }
    #wrapper {
      position: relative;
      overflow: hidden;
      height: 100%;
    }
    .ripple {
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      position: absolute;
      z-index: 1;
      pointer-events: none;
    }
  </style>
  <div id="wrapper"><slot></slot></div>
`;

class SnapRipple extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._wrapper = this.shadowRoot.getElementById('wrapper');
  }

  connectedCallback() {
    this.addEventListener('click', this.ripple);
  }
  disconnectedCallback() {
    this.removeEventListener('click', this.ripple);
  }

  ripple(e) {
    if (this.disabled) {
      return;
    }
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    const clientRect = this.getBoundingClientRect();

    const maxDX = Math.max(
      e.clientX - clientRect.left,
      clientRect.left + clientRect.width - e.clientX
    );
    const maxDY = Math.max(
      e.clientY - clientRect.top,
      clientRect.top + clientRect.height - e.clientY
    );

    const size = Math.sqrt(maxDX ** 2 + maxDY ** 2) * 2;
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - clientRect.x + 'px';
    ripple.style.top = e.clientY - clientRect.y + 'px';
    this._wrapper.appendChild(ripple);
    const rippleAnimation = ripple.animate(
      [
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }
      ],
      {
        fill: 'forwards',
        easing: 'ease-out',
        duration: 300
      }
    );

    rippleAnimation.onfinish = () => this._wrapper.removeChild(ripple);
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    const isdisabled = Boolean(value);
    if (isdisabled) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }
}
customElements.define('snap-ripple', SnapRipple);
