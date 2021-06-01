const Joi = require('joi')
const express = require('express')
const path = require('path')
const app = express()
const exphbs = require('express-handlebars')
const courses = [
    {
        id: 1,
        name: 'courses1'
    },
    {
        id: 2,
        name: 'courses2'
    },
    {
        id: 3,
        name: 'courses3'
    }
]

app.use(express.json())

//Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//Get Request
app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('index' ,{name: "Irvine"})
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))

    if(!course) //404
    {
        res.status(404).send('The course with the given ID was wrong')
    }
    res.send(course)
})

// POST Request

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required(),
        address: Joi.required()
    }

    const result = Joi.validate(req.body, schema)
    console.log(result)

    if(result.error)
    {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message)
        return
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

// /api/courses/1
app.get('/api/posts/:year/:month', (req, res) => {
    //res.send(req.params)

    //Buat ambil query string parameter
    res.send(req.query)
})


// PORT
// Ini kalo pas hosting dia bisa detect port ketika dipanggil 
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

