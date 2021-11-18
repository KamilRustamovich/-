const mongoose = require('mongoose')
const slugify = require('slugify')

const commentSchema = new mongoose.Schema({
    comment: {type: String}
})

module.exports = mongoose.model('Comment', commentSchema)