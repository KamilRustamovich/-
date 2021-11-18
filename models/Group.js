const mongoose = require('mongoose')
const slugify = require('slugify')

const groupSchema = new mongoose.Schema({
    group: {type: String, required: true, unige: true},
    student: [{type: mongoose.Schema.Types.ObjectId, ref: "Student"}],
    slug: {type: String, required: true, unige: true},
})

groupSchema.pre('validate', function(next) {
    if (this.group) {
        this.slug = slugify(this.group, {
            lower: true,
            strict: true
        })
    }

    next()
})

module.exports = mongoose.model('Group', groupSchema)