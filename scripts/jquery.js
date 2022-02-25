/*=================================================
jQuery
===================================================*/

$(function() {
  // ハンバーガーメニューをクリックした時
  $('.hamburger').on('click', function() {
    hamburger();
  });
  // メニューのリンクをクリックした時
  $('#navi a').on('click', function() {
    hamburger();
  });
  
  // 画面に表示された時（スライド左）
  $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView) {
      $(this).stop().addClass('slide-left');
    }
  });

  // 画面に表示された時（スライド右）
  $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView) {
      $(this).stop().addClass('slide-right');
    }
  });

  // 画面に表示された時（ふきだし）
  $('.inview-balloon').on('inview', function(event, isInview, visiblePartX, visiblePartY) {
    if(isInview) {
      $(this).stop().addClass('balloon');
    }
  });
  
  function hamburger() {
    $('.hamburger').toggleClass('active');
    
    if ($('.hamburger').hasClass('active')) {
      $('#navi').addClass('active');
    } else {
      $('#navi').removeClass('active');
    }
  }
});