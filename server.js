const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Student = require('./models/university')
const studentsRouter = require('./routes/students')
const adminRouter = require('./routes/admin')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/blog')
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => {console.log('Connected to Mongoose')});

const app = express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi')
        const students = await Student.find({fullName: regex})
        res.render('students/index', {students: students})
    } else {
        const students = await Student.find()
        res.render('students/index', {students: students})
    }
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$!#\s]/g, "\\$&")
}

let port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server has started on PORT: ${port}`)
})

app.use('/students', studentsRouter)
app.use('/admin', adminRouter)