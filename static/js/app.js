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

/* page index */
app.onPageInit('index', function(page) {
  console.log('page index enter');
});
/* /page index */

app.init()