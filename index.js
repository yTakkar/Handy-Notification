const $ = require('jquery')

/**
 * Function to notify
 * 
 * @param {Object} options 
 * @param {String} options.beforeTop
 * @param {String} options.afterTop
 * @param {String} options.value
 * @param {jQuery} options.selector
 * @param {Function} options.onClick
 * @param {Function} options.done
 */
const Notify = options => {
  const defaults = {
    beforeTop: '105%',               // Position before it notifies
    afterTop: '90%',                 // Position after it notifies
    value: 'Message',                // This will be the message
    selector: $('.handy-notify'),    // Selector you just created
    onClick: () => { return },       // Function executed when clicked on the notification bar
    done: () => { return }           // Function which will be executed when you're notified
  }
  const settings = { ...defaults, ...options }
  const {
    selector, value, beforeTop, afterTop, onClick, done
  } = settings

  $(selector)
    .css({
      'position': 'fixed',
      'background': '#333',
      'left': '2%',
      'color': 'white',
      'border-radius': '3px',
      'padding': '12px 80px 12px 25px',
      'font-size': '15px',
      'cursor': 'pointer',
      'text-align': 'left',
      'z-index': '30000',
      'top': '105%'
    })
    .find('span').html(value)

  $(selector).animate(
  { top: afterTop }, 
  'fast', 
  () => {
    done()
    setTimeout(() => {
      $(selector).animate({ top: beforeTop })
    }, 3000)
  })

  $(selector).on('click', e => {
    onClick(e)
    $(selector).animate({ top: beforeTop })
  })

}

module.exports = Notify
