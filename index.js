var $ = require('jquery')

// FUNCTION TO NOTIFY
var Notify = function(options){
  var defaults = {
    beforeTop: "105%",
    afterTop:  "90%",
    value:     "Message",
    selector:  null,
    action:    null,
    done:      null
  };

  var settings = Object.assign({}, defaults, options);
  
  var 
    selector  = settings.selector,
    value     = settings.value,
    beforeTop = settings.beforeTop,
    afterTop  = settings.afterTop,
    action    = settings.action,
    done      = settings.done;

  selector.children().filter('span').html(value);

  selector.animate({
    top: afterTop
  }, "fast",  function(){
    done != null ? location.href = done : null;
    setTimeout(function(){
      selector.animate({ top: beforeTop });
    }, 3000);
  });

  selector.on('click', function(e){
    action != null ? location.href = action : null;
    selector.animate({
      top: beforeTop
    });
  });

}

module.exports = Notify