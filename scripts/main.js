/*=================================================
jQuery
===================================================*/

// $(function() {
//   // ハンバーガーメニューをクリック時
//   $('.hamburger').on('click', function() {
//     hamburger();
//   });
//   メニューのリンクをクリック時
//   $('#navi a').on('click', function() {
//     hamburger();
//   });
// });

// function hamburger() {
//   $('.hamburger').toggleClass('active');

//   if ($('.hamburger').hasClass('active')) {
//     $('#navi').addClass('active');
//   } else {
//     $('#navi').removeClass('active');
//   }
// }

/*=================================================
JavaScript
===================================================*/

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
// ナビメニュー
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