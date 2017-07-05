import $ from 'jquery'

// FUNCTION TO NOTIFY
const Notify = options => {
  let defaults = {
    beforeTop: "105%",     // No need to overwrite this
    afterTop:  "90%",      // same here, no overwriting
    value:     "Message",  // This will be the message
    selector:  null,       // Selector you just created
    action:    null,       // responsible to redirect to a URL when clicked
    done:      () => { return }       // It's a function which will be executed when you're notified
  };

  let settings = { ...defaults, ...options }
  
  // var 
  //   selector  = settings.selector,
  //   value     = settings.value,
  //   beforeTop = settings.beforeTop,
  //   afterTop  = settings.afterTop,
  //   action    = settings.action,
  //   done      = settings.done;

  let { selector, value, beforeTop, afterTop, action, done } = settings

  $(selector).find('span').html(value)

  $(selector).animate({
    top: afterTop
  }, "fast",  () => {
    done()
    setTimeout(() => {
      $(selector).animate({ top: beforeTop })
    }, 3000)
  })

  $(selector).on('click', () => {
    action != null ? location.href = action : null
    $(selector).animate({ top: beforeTop })
  })

}

export default Notify