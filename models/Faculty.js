const mongoose = require('mongoose')
const slugify = require('slugify')

const facultySchema = new mongoose.Schema({
    faculty: {type: String, required: true, unige: true},
    department: [{type: mongoose.Schema.Types.ObjectId, ref: "Department"}],
    slug: {type: String, required: true, unige: true},
})

facultySchema.pre('validate', function(next) {
    if (this.faculty) {
        this.slug = slugify(this.faculty, {
            lower: true,
            strict: true
        })
    }

    next()
})

module.exports = mongoose.model('Faculty', facultySchema)