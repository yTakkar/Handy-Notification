(function($){
  $.fn.Handy = function(options){
    var defaults = {
      beforeTop: "105%",
      afterTop:  "90%",
      value:     null,
      action:    null,
      done:      function(){ return; }
    }
    var settings = $.extend({}, defaults, options);

    this.children().find('span').html(settings.value);

    var div = this;

    this.animate({
      top: settings.afterTop
    }, "fast", function(){
      done();
      setTimeout(function(){
        div.animate({ top: settings.beforeTop });
      }, 3000);
    });

    this.on('click', function(e){
      settings.action != null ? location.href = settings.action : null
      div.animate({ top: settings.beforeTop });
    });

    return this;

  }
}(jQuery));
