// function Server(name, ip) {
//     this.name = name
//     this.ip = ip
// }

// Server.prototype.getUrl = function() {return `https://${this.ip}:80`}

// const aws = new Server('Aws German', '82.21.21.32')

// console.log(aws.getUrl())

class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new Server('Aws German', '82.21.21.32')
const aws_kax = new Server('Aws kazakhstan', '1111111111')

console.log(aws.getUrl())
console.log(aws_kax.getUrl())

