class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to){
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name} : ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users ={}
    }

    register(user){
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if(to){
            to.receive(message, from)
        }else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message,from)
                }
            })
        }
    }
}

const vlad = new User('Vladilen')
const sadaev = new User('Sadaev')
const lena = new User('Elena')

const room = new ChatRoom()

room.register(vlad)
room.register(sadaev)
room.register(lena)

vlad.send('hello!', lena)
lena.send('Hello!', sadaev)
sadaev.send('Privet!', lena)