# Handy-Notification
Google+ style notification which comes from the bottom to notify.

[![npm version](https://badge.fury.io/js/handy-notification.svg)](https://www.npmjs.com/package/handy-notification)

# Quick links
1. [Screenshot](#screenshot)
2. [Usage](#usage)
3. [API](#api)
4. [Contribute](#contribute)

# Screenshot
![alt text](https://image.ibb.co/dzLShT/Snap_2017_05_23_at_01_21_00.png)

The above screenshot is from [React-Instagram-clone-2.0](https://github.com/yTakkar/React-Instagram-clone-2.0)

# Usage

1. First install the package with `npm` or `Yarn`.
    ```bash
    # with npm
    npm install handy-notification
    
    # or with Yarn
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
    import Notify from 'handy-notification'
    Notify({
        value: "Hello, how are you?",   // Message to be displayed
        onClick: e => console.log('Clicked!!'),  // Function executed when clicked on the notification bar
        done: () => console.log('I notified you & went back to the bottom!')    // function to be executed when you're notified
    })
    ```

# Example
```
npm run example
```

Run the above command and open http://localhost:7007

# API
```JavaScript
Notify(options:Object)
options = {
    beforeTop: String,
    afterTop: String,
    value: String,
    selector: jQueryElement,
    onClick: Function,
    done: Function
}
```

<dl>
  <dt>beforeTop:</dt>
  <dd>Initial top position which keeps the notification bar at the bottom to hide it. Default top style is 105%.</dd>

  <dt>afterTop</dt>
  <dd>Top position where it comes from the bottom & stops to notify you. Default top style is 90%.</dd>

  <dt>value</dt>
  <dd>This will be the message.</dd>

  <dt>selector</dt>
  <dd>Selector you just created.</dd>

  <dt>onClick</dt>
  <dd>Function executed when clicked on the notification bar.</dd>

  <dt>done</dt>
  <dd>Function executed when you're notified.</dd>
</dl>

# Contribute
Show your support by 🌟 the project!!

Feel free to contribute!!

**Thanks for reading!!**
