;(function() {
  
  function Toast(config) {

    if (!(this instanceof Toast)) {
      return new Toast(config);
    }

    $('.eps-toast').remove();

    if (arguments.length === 1 && (typeof arguments[0] === 'string')) {
      config = {
        text: arguments[0]
      }
    }

    this.config = $.extend({}, {
      text: 'hello world',
      target: document.body,
      timer: 5000
    }, config);

    this.handlers = {};

    var self = this;

    var _fontSize     = 24,
        _lineHeight   = 1.5,
        _borderRadius = 24 * 1.5;

    var isInit = false; // transitionEnd事件会对css改变的数量一样，用个开关控制只传递一次init事件

    this.bound = $('<div class="eps-toast">' + this.config.text + '</div>');
    this.bound.css({
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(1.3)',
      opacity: 0,
      transition: 'all .5s',
      zIndex: 99999,
      letterSpacing: '2px',
      padding: '.5em 1.5em',
      color: '#fff',
      background: 'rgba(0,0,0,.8)',
      fontSize: _fontSize + 'px',
      lineHeight: _lineHeight,
      borderRadius: _borderRadius + 'px',
    });
    
    this.bound.appendTo(this.config.target);

    setTimeout(function() {
      self.bound.css({
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1,
      });
      self.bound.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionend transitionend', function(){
        if (!isInit) {
          isInit = true;
          self.fire('init');
        }
      });
    }, 0);

    setTimeout(function() {
      self.bound.css({
        transform: 'translate(-50%, -50%) scale(1.3)',
        opacity: 0
      });
      self.bound.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionend transitionend', function(){
        self.bound.remove();
        self.fire('destory');
      });
    }, this.config.timer);

  }

  Toast.prototype = {
    on: function(type, handler) {
      var self = this;

      if (typeof this.handlers[type] === 'undefined') {
        this.handlers[type] = [];
      }

      this.handlers[type].push(handler);
    },
    fire: function(type, data) {
      var self = this;

      if( !(this.handlers[type] instanceof Array) ) {
        return;
      }

      var handlers = this.handlers[type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        handlers[i](data);
      }
    }
  }

  window.Toast = Toast;

})()

var toast = new Toast({
  text: '我是一个通知',
  timer: 5000
})

toast.on('init', function(){
  console.log('init');
})
toast.on('destory', function(){
  console.log('destory');
})