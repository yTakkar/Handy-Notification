# Handy-Notification
A very simple & useful Google+ style notification bar which comes from the bottom, notified you & transitions back to the bottom. Screenshot below.

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [API](#API)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Notification/master/screenshots/Snap%202017-05-23%20at%2001.21.00.png)

# Requirements
1. jQuery

# Usage

1. First install the package with `npm`.

```
npm install handy-notification
```

2. Create a div with any `ClassName`.
```html
<div class='handy'>
    <span></span>
</div>
```

3. Add below styles to the `handy` div.
```css
.handy{
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
const Handy = require('handy-notification');
Handy({
    value: "Hello, how are you?",   // Message to be displayed
    selector: document.querySelector('.handy'), // selector we just created
    action: "https://github.com/yTakkar/Handy-Notification",    // URL when clicked on the notification bar
    done: () => console.log('I notified you & went back to the bottom!')    // function to be executed when we're notified
});
```

# API
```javascript
Handy(options:Object)
options = {
    beforeTop: Initial top style which keeps the notification bar at the bottom. Default is 105%
    afterTop:  Top style where it stops to notify you. Default is 90%
    value:     This will be the message
    selector:  Selector you just created
    action:    It's a URL. Responsible to redirect to a URL when clicked
    done:      It's a function which will be executed when you're notified
}
```