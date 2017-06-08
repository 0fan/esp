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
  
});

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
  // $('.navbar').removeClass('navbar-brand no-border');
});
/* /page index */

app.init()