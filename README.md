# Handy-Notification
A very simple, tiny & useful Google+ style notification bar which comes from the bottom, notifies you & transitions back to the bottom. Screenshots below.

If you're reading this on npmjs website, please visit [GitHub page](#https://github.com/yTakkar/Handy-Notification) for better documentation!!

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage with npm or Yarn](#usage)
4. [Usage as a jQuery plugin](#usage-as-a-jquery-plugin)
4. [API](#api)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Notification/master/screenshots/Snap%202017-05-23%20at%2001.21.00.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Notification/master/screenshots/Snap%202017-05-23%20at%2000.15.02.png)

These screenshots are from [Instagram-clone](https://github.com/yTakkar/Instagram-clone) I created & you can use the code with 5 simple & straight-forward steps!!

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

3. Add below styles to the `.handy-notify` div in your stylesheet.
```css
.handy-notify{
    position: fixed;
    background: #333;
    left: 2%;
    color: white;
    border-radius: 3px;
    padding: 12px 80px 12px 25px;
    font-size: 15px;
    cursor: pointer;
    text-align: left;
    z-index: 3;
    top: 105%;
}
```

4. And here comes the fun part.
```javascript
import Handy from 'handy-notification'
Handy({
    value: "Hello, how are you?",   // Message to be displayed
    action: "https://github.com/yTakkar/Handy-Notification",    // URL when clicked on the notification bar
    done: () => console.log('I notified you & went back to the bottom!')    // function to be executed when you're notified
})
```

# Usage as a jQuery plugin

1. Copy `Handy-notify-plugin.js` into your project & include it.
```html
<script src="/Handy-notify-plugin.js" ></script>
```

2. Create a div with class `handy-notify`.
```html
<div class='handy-notify'>
    <span></span>
</div>
```

3. Add below styles to the `.handy-notify` div in your stylesheet.
```css
.handy-notify{
    position: fixed;
    background: #333;
    left: 2%;
    color: white;
    border-radius: 3px;
    padding: 12px 80px 12px 25px;
    font-size: 15px;
    cursor: pointer;
    text-align: left;
    z-index: 3;
    top: 105%;
}
```

4. And here comes the fun part.
```javascript
$('.handy-notify').HandyNotify({
    value: "Hello, how are you?",   // Message to be displayed
    action: "https://github.com/yTakkar/Handy-Notification",    // URL when clicked on the notification bar
    done: () => console.log('I notified you & went back to the bottom!')    // function to be executed when we're notified
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

**Thanks for reading!!**
