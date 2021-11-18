const mongoose = require('mongoose')
const slugify = require('slugify')

const departmentSchema = new mongoose.Schema({
    department: {type: String, required: true, unige: true},
    profession: [{type: mongoose.Schema.Types.ObjectId, ref: "Profession"}],
    slug: {type: String, required: true, unige: true},
})

departmentSchema.pre('validate', function(next) {
    if (this.department) {
        this.slug = slugify(this.department, {
            lower: true,
            strict: true
        })
    }

    next()
})

module.exports = mongoose.model('Department', departmentSchema)