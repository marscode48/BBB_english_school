/*=================================================
jQuery
===================================================*/

// $(function() {
//   // ハンバーガーメニューをクリックした時
//   $('.hamburger').on('click', function() {
//     hamburger();
//   });
//   // メニューのリンクをクリックした時
//   $('#navi a').on('click', function() {
//     hamburger();
//   });
  
//   // 画面に表示された時（スライド左）
//   $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
//     if(isInView) {
//       $(this).stop().addClass('slide-left');
//     }
//   });

//   // 画面に表示された時（スライド右）
//   $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
//     if(isInView) {
//       $(this).stop().addClass('slide-right');
//     }
//   });

//   // 画面に表示された時（ふきだし）
//   $('.inview-balloon').on('inview', function(event, isInview, visiblePartX, visiblePartY) {
//     if(isInview) {
//       $(this).stop().addClass('balloon');
//     }
//   });
  
//   function hamburger() {
//     $('.hamburger').toggleClass('active');
    
//     if ($('.hamburger').hasClass('active')) {
//       $('#navi').addClass('active');
//     } else {
//       $('#navi').removeClass('active');
//     }
//   }
// });

/*=================================================
JavaScript (ハンバーガーメニュー)
===================================================*/

const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('#navi');

function menuOpen() {
  hamburger.classList.toggle('active');
  if(hamburger.classList.contains('active')) {
    navi.classList.add("active");
  } else {
    navi.classList.remove('active');
  }
}

hamburger.addEventListener('click', menuOpen);
navi.addEventListener('click', menuOpen);


/*=================================================
JavaScript (Inview)
===================================================*/

// スライド画面(左)を表示
const els1 = document.querySelector('.inview-slide-left');
const options1 = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};
const io1 = new IntersectionObserver(cb1, options1);

function cb1(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('slide-left');
      observer.unobserve(entry.target);
    }
  })
};

io1.observe(els1);

// スライド画面(右)を表示
const els2 = document.querySelector('.inview-slide-right');
const options2 = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};
const io2 = new IntersectionObserver(cb2, options2);

function cb2(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('slide-right');
      observer.unobserve(entry.target);
    }
  })
};

io2.observe(els2);

// ふきだしを表示
const els3 = document.querySelectorAll('.inview-balloon');
const options3 = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};
const io3 = new IntersectionObserver(cb3, options3);

function cb3(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('balloon');
      observer.unobserve(entry.target);
    }
  });
}

els3.forEach(el3 => io3.observe(el3));
