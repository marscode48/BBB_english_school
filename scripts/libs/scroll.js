class ScrollObserver {
  constructor(els, cb, options) {
    console.log(cb)
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      console.log(entries)
      console.log(observer)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if(this.once) {
            console.log(this.once)
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);

    this.els.forEach(el => this.io.observe(el));


  }
}



// スライド画面(左)を表示
// const els1 = document.querySelector(".inview-slide-left");
// const options1 = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0,
// };
// const io1 = new IntersectionObserver(cb1, options1);

// function cb1(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("slide-left");
//       observer.unobserve(entry.target);
//     }
//   });
// }

// io1.observe(els1);

// スライド画面(右)を表示
// const els2 = document.querySelector(".inview-slide-right");
// const options2 = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0,
// };
// const io2 = new IntersectionObserver(cb2, options2);

// function cb2(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("slide-right");
//       observer.unobserve(entry.target);
//     }
//   });
// }

// io2.observe(els2);

// ふきだしを表示
// const els3 = document.querySelectorAll(".inview-balloon");
// const options3 = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0,
// };
// const io3 = new IntersectionObserver(cb3, options3);

// function cb3(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("balloon");
//       observer.unobserve(entry.target);
//     }
//   });
// }

// els3.forEach((el3) => io3.observe(el3));
