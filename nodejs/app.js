// function sayHello(name)
// {
//     console.log("Hello " + name)
// }

// sayHello("Magizuki")


// //Belong to window object
// console.log(); //global

// setTimeout()
// clearTimeout();

// setInterval()
// clearInterval()

// var message = ''
// global.setTimeout

//Loading Module
// var logger = require('./logger.js')

// logger.log('message')

//console.log(logger);

//console.log(module);

// Path Module
// const path = require('path')

// var pathObj = path.parse(__filename)

// console.log(pathObj)

//os module
// const os = require('os')

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// //console.log('Total Memory: ' + totalMemory)

// //Template String
// //ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

//file system module
// const fs = require('fs')

// const files = fs.readdirSync('./');
// //console.log(files)

// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// })

// fs.readdir('$', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// })


//Event Module
// const EventEmitter = require('events')
// //const emitter = new EventEmitter()

// const Logger = require('./logger')
// const logger = new Logger()

// //Register a listener
// logger.on('messageLogged', (arg) => { // e, eventArg
//     console.log('Listener called', arg)
// })

// logger.log('message')


//Raise an event
//emitter.emit('messageLogged', { id: 1, url: 'http://'})

//emit -> Making a noise, produce - signalling 

//Raise: logging (data: message)

//http module
const http = require('http');
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        fs.readFile(path.join(__dirname,'index.html'), (err, content) => {
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(content)
            res.end()
            //res.end(content)
        })

        // res.write('Hello World')
        // res.end()
    }

    if(req.url === '/api/courses')
    {
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }

})

// server.on('connection', (socket) => {
//     console.log('new connection')
// })

server.listen(2000)

console.log('Listening on port 2000...')



