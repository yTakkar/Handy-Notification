# Handy-Notification
A very simple, tiny & useful Google+ style notification bar which comes from the bottom, notifies you & transitions back to the bottom. Screenshots below.

[![npm version](https://badge.fury.io/js/handy-notification.svg)](https://www.npmjs.com/package/handy-notification)

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [API](#api)
5. [Contribute](#contribute)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Notification/master/screenshots/Snap%202017-05-23%20at%2001.21.00.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Notification/master/screenshots/Snap%202017-05-23%20at%2000.15.02.png)

These screenshots are from [React-Instagram-clone-2.0](https://github.com/yTakkar/React-Instagram-clone-2.0)!!

# Requirements
1. jQuery

# Usage

1. First install the package with `npm` or `Yarn`.
    ```
    npm install handy-notification
    ```
    or
    ```
    yarn add handy-notification
    ```

2. Create a div with class `handy-notify`.
    ```html
    <div class='handy-notify'>
        <span></span>
    </div>
    ```

3. And here comes the fun part.
    ```javascript
    import Handy from 'handy-notification'
    Handy({
        value: "Hello, how are you?",   // Message to be displayed
        action: "https://github.com/yTakkar/Handy-Notification",    // URL when clicked on the notification bar
        done: () => console.log('I notified you & went back to the bottom!')    // function to be executed when you're notified
    })
    ```

# API
```javascript
Handy(options:Object)
options = {
    beforeTop,
    afterTop,
    value,
    selector,
    action,
    done
}
```

<dl>
  <dt>beforeTop:</dt>
  <dd>Initial top style which keeps the notification bar at the bottom to hide it. Default top style is 105%.</dd>

  <dt>afterTop</dt>
  <dd>Top style where it comes from the bottom & stops to notify you. Default top style is 90%.</dd>

  <dt>value</dt>
  <dd>This will be the message.</dd>

  <dt>selector</dt>
  <dd>Selector we just created (NOTE: Not availabe to jQuery plugins).</dd>

  <dt>action</dt>
  <dd>It's a URL. Responsible to redirect when clicked.</dd>

  <dt>done</dt>
  <dd>It's a function which will be executed when you're notified</dd>
</dl>

# Contribute
Show your support by 🌟 the project!!

Feel free to contribute!!

**Thanks for reading!!**
