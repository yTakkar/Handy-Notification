import Notify from '../index'

Notify({
    value: 'Hey, how are you doing??',
    onClick: () => {
        location.href = 'https://github.com/yTakkar/Handy-Notification'
    },
    done: () => {
        console.log("I'm back!!")
    }
})