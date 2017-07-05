# Handy-Notification
A very simple & useful Google+ style notification bar which comes from the bottom, notified you & transitions back to the bottom. Screenshot below.

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage](#usage)

# Screenshots
![alt text](https://github.com/yTakkar/Handy-Notification/blob/master/screenshots/Snap%202017-05-23%20at%2001.21.00.png)

# Requirements
1. jQuery

# Usage

1. First install the package with `npm`.

```
npm install handy-notification
```

2. Create a div with any `ClassName`.
```
<div class='handy'>
    <span></span>
</div>
```

3. Add below styles to the `handy` div.
```
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
const Handy = require('handy')
Handy({
    value: "Hello, how are you?",
    selector: document.querySelector('.handy'),
    done: () => console.log('I notified you & went back to the bottom!')
})
```