/*=================================================
JavaScript
===================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._init();
    this._scrollInit();
  }

  _init() {
    new MenuOpen();
  }

  _inviewAnimationLeft(el, inview) {
    console.log(inview)
    console.log(el)
    if(inview) {
      el.classList.add('slide-left');
    }
  }

  _inviewAnimationRight(el, inview) {
    console.log(inview)
    console.log(el)
    if(inview) {
      el.classList.add('slide-right');
    }
  }

  _inviewAnimationBaloon(el, inview) {
    console.log(inview)
    console.log(el)
    if(inview) {
      el.classList.add('balloon');
    }
  }

  _scrollInit() {
    new ScrollObserver('.inview-slide-left', this._inviewAnimationLeft);
    new ScrollObserver('.inview-slide-right', this._inviewAnimationRight);
    new ScrollObserver('.inview-balloon', this._inviewAnimationBaloon);
  }
}
