const mongoose = require('mongoose')
const slugify = require('slugify')

const professionSchema = new mongoose.Schema({
    profession: {type: String, required: true, unige: true},
    group: [{type: mongoose.Schema.Types.ObjectId, ref: "Group"}],    
    slug: {type: String, required: true, unige: true},
})

professionSchema.pre('validate', function(next) {
    if (this.profession) {
        this.slug = slugify(this.profession, {
            lower: true,
            strict: true
        })
    }

    next()
})

module.exports = mongoose.model('Profession', professionSchema)