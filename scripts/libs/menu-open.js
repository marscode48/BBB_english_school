class MenuOpen {
  constructor() {
    this.DOM = {};
    this.DOM.hamburger = document.querySelector('.hamburger');
    this.DOM.navi = document.querySelector('#navi');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }
  
  _add() {
    this.DOM.navi.classList.add('active');
  }

  _remove() {
    this.DOM.navi.classList.remove('active');
  }

  _toggle() {
    this.DOM.hamburger.classList.toggle('active');
    this.DOM.hamburger.classList.contains('active') ? this._add() : this._remove();
  }

  _addEvent() {
    this.DOM.hamburger.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
