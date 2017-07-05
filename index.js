var $ = require('jquery')

// FUNCTION TO NOTIFY
var Notify = function(options){
  var defaults = {
    beforeTop: "105%",     // No need to overwrite this
    afterTop:  "90%",      // same here, no overwriting
    value:     "Message",  // This will be the message
    selector:  null,       // Selector you just created
    action:    null,       // responsible to redirect to a URL when clicked
    done:      function(){ return false; }       // It's a function which will be executed when you're notified
  };

  var settings = Object.assign({}, defaults, options);
  
  var 
    selector  = settings.selector,
    value     = settings.value,
    beforeTop = settings.beforeTop,
    afterTop  = settings.afterTop,
    action    = settings.action,
    done      = settings.done;

  $(selector).find('span').html(value);

  $(selector).animate({
    top: afterTop
  }, "fast",  function(){
    done();
    setTimeout(function(){
      $(selector).animate({ top: beforeTop });
    }, 3000);
  });

  $(selector).on('click', function(e){
    action != null ? location.href = action : null;
    $(selector).animate({
      top: beforeTop
    });
  });

}

module.exports = Notify