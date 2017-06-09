/* 应用初始化 */
var app = new Framework7({
  init: false,
  cache: false, // 页面缓存
  activeState: false, // 启用这个设置时，会给当前点击的元素增加一个 'active-state' class
  // 弹层
  modalTitle: '提示',
  modalButtonOk: '确认',
  modalButtonCancel: '取消',
  modalPreloaderTitle: '加载中...'
});

/* 初始化view */
var mainView = app.addView('.view-main', {
  dynamicNavbar: true
});

$$ = Framework7.$;

mainView.showSidebar = function(cb) {
  $('.sidebar').addClass('active');
  $('.page-content').css({paddingLeft: '340px'});
  $('.page-content').one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionend Transitionend', function() {
    cb && cb();
  });
}

mainView.hideSidebar = function(cb) {
  $('.sidebar').removeClass('active');
  $('.page-content').css({paddingLeft: '0'});
  $('.page-content').one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionend Transitionend', function() {
    cb && cb();
  });
}

/* page index */
app.onPageInit('index', function(page) {
  
  $('#btn-guide').on('click', function() {
    mainView.router.loadPage('test.html?' + Math.random());
  });

});
/* /page index */

/* page about */
app.onPageInit('about', function(page) {

  $('.navbar').addClass('navbar-brand no-border');
  mainView.showSidebar();

  $('.eps-back').on('click', function() {
    $('.navbar').removeClass('navbar-brand no-border');
    // mainView.hideSidebar();
    mainView.router.back();
  });
  
});
app.onPageBack('about', function() {
  mainView.hideSidebar();
  $('.eps-back').off('click');
});
/* /page about */

/* /page identify-step1 */
app.onPageInit('identify-step1', function(page) {

  $('.navbar').addClass('navbar-brand no-border');
  mainView.showSidebar();

  $('.eps-back').on('click', function() {
    $('.navbar').removeClass('navbar-brand no-border');
    // mainView.hideSidebar();
    mainView.router.back();
  });
  $('#toI2').click(function (e) {
    e.preventDefault();
    mainView.router.loadPage('identify-step2.html?'+Math.random());
  })
});
/* /page identify-step1 */

/* /page identify-step2 */
app.onPageInit('identify-step2', function(page) {

  $('.navbar').addClass('navbar-brand no-border');
  mainView.showSidebar();

  $('.eps-back').on('click', function() {
    $('.navbar').removeClass('navbar-brand no-border');
    // mainView.hideSidebar();
    mainView.router.back();
  });
  $('#toI3').click(function (e) {
    e.preventDefault();
    mainView.router.loadPage('identify-step3.html?'+Math.random());
  })
});
/* /page identify-step2 */

/* /page identify-step3 */
app.onPageInit('identify-step3', function(page) {

  $('.navbar').addClass('navbar-brand no-border');
  mainView.showSidebar();

  $('.eps-back').on('click', function() {
    $('.navbar').removeClass('navbar-brand no-border');
    // mainView.hideSidebar();
    mainView.router.back();
  });
  $('#toI4').click(function (e) {
    e.preventDefault();
    mainView.router.loadPage('identify-step4.html?'+Math.random());
  })
});
/* /page identify-step3 */

/* /page identify-step4 */
app.onPageInit('identify-step4', function(page) {

  $('.navbar').addClass('navbar-brand no-border');
  mainView.showSidebar();

  $('.eps-back').on('click', function() {
    $('.navbar').removeClass('navbar-brand no-border');
    // mainView.hideSidebar();
    mainView.router.back();
  });
  $('#toI2').click(function (e) {
    e.preventDefault();
    mainView.router.loadPage('identify-step2.html?'+Math.random());
  })
});
/* /page identify-step4 */


/* page deposit-step2 */
app.onPageInit('deposit-step2', function(page) {
  
  $('.popup-about').on('open', function() {
    var wrapper = document.getElementById("sign"),
        canvas  = wrapper.querySelector("canvas"),
        sign;

    function resizeCanvas() {
      var ratio =  Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
    }

    window.onresize = resizeCanvas;

    resizeCanvas();
    sign = new SignaturePad(canvas, {
      minWidth: 2,
      maxWidth: 4
    });
    
    $('.sign-btn.reset').on('click', function() {
      sign.clear();
      $('.icon', this).addClass('active');
      $('.icon', this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationend animationend', function() {
        $(this).removeClass('active');
      });
    });

    $('.sign-btn.done').on('click', function() {
      app.closeModal();
    });

  });
});
/* /page deposit-step2 */


app.init()