const express = require('express')
const Student = require('../models/university')
const router = express.Router()

// Добавление новой записи
router.get('/new', (req, res) => {
    res.render('students/new', {student: new Student()})
})

//
router.get('/edit/:id', async (req, res) => {
    const student = await Student.findById(req.params.id)
    res.render('students/edit', {student: student})
})

//
router.get('/:slug', async (req, res) => {
    const student = await Student.findOne({slug: req.params.slug})
    if (student == null) res.redirect('/')
    res.render('students/show', {student: student})
})

//
router.post('/', async (req, res, next) => {
    req.student = new Student()
    next()
}, saveArticleAndRedirect('new'))

//
router.put('/:id', async (req, res, next) => {
    req.student = await Student.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))


function saveArticleAndRedirect(path) {
    return async (req, res) => { 
        let student = req.student
        student.fullName = req.body.fullName
        student.faculty = req.body.faculty
        student.department = req.body.department
        student.profession = req.body.profession
        student.group = req.body.group
        student.graduationDate = req.body.graduationDate
        student.dateOfBirth = req.body.dateOfBirth
        student.email = req.body.email
        student.phone = req.body.phone
        student.passport = req.body.passport
        student.vkr = req.body.vkr
        student.formOfStudy = req.body.formOfStudy
        student.createdAt = req.body.createdAt
        student.updatedAt = req.body.updatedAt
        student.libStatus = req.body.libStatus
        student.interStatus = req.body.interStatus
        student.pasportStatus = req.body.pasportStatus
        student.departmentStatus = req.body.departmentStatus
        student.accountingStatus = req.body.accountingStatus
        student.campusStatus = req.body.campusStatus
        student.hrStatus = req.body.hrStatus
        student.docStatus = req.body.docStatus

    
        try {
            student = await student.save()
            res.redirect(`/students/${student.slug}`)
        } catch(e) {
            console.log(e)
            res.render(`students/${path}`, {student: student})
        }
    }
}

module.exports = router