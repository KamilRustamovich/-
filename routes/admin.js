const express = require('express')
const Faculty = require('../models/Faculty')
const Department = require('../models/Department')
const Profession = require('../models/Profession')
const Group = require('../models/Group')
const Student1 = require('../models/Student')
const Document = require('../models/Document')
const Comment = require('../models/Comment')
const router = express.Router()

//Главная страница
router.get('/', (req, res) => {
    res.render('admin/admin')
})

//Факультеты
router.get('/', (req, res) => {
    res.render('admin/faculty')
})

//Добавление записи факультета
router.get('/new', (req, res) => {
    res.render('admin/new', {faculty: new Faculty()})
})

module.exports = router