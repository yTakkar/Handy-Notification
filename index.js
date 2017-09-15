const $ = require('jquery')

// FUNCTION TO NOTIFY
const Notify = function(options){
  const defaults = {
    beforeTop: "105%",     // No need to overwrite this
    afterTop:  "90%",      // same here, no overwriting
    value:     "Message",  // This will be the message
    selector:  $('.handy-notify'),       // Selector you just created
    action:    null,       // responsible to redirect to a URL when clicked
    done:      function(){ return }       // It's a function which will be executed when you're notified
  }

  const settings = Object.assign({}, defaults, options)
  
  const 
    selector  = settings.selector,
    value     = settings.value,
    beforeTop = settings.beforeTop,
    afterTop  = settings.afterTop,
    action    = settings.action,
    done      = settings.done

  $(selector)
    .css({
        "position": "fixed",
        "background": "#333",
        "left": "2%",
        "color": "white",
        "border-radius": "3px",
        "padding": "12px 80px 12px 25px",
        "font-size": "15px",
        "cursor": "pointer",
        "text-align": "left",
        "z-index": "30000",
        "top": "105%"
    })
    .find('span').html(value)

  $(selector).animate({
    top: afterTop
  }, "fast",  function(){
    done()
    setTimeout(function(){
      $(selector).animate({ top: beforeTop })
    }, 3000)
  })

  $(selector).on('click', function(e){
    action != null ? location.href = action : null
    $(selector).animate({ top: beforeTop })
  })

}

module.exports = Notify
