const mongoose = require('mongoose')
const slugify = require('slugify')

const universitySchema = new mongoose.Schema({
    faculty: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    
        graduationDate: {
            type: Date
        },
        dateOfBirth: {
            type: Date
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        passport: {
            file: { type: Buffer },
            filename: { type: String },
            mimetype: { type: String }
        },
        vkr: {
            file: { type: Buffer },
            filename: { type: String },
            mimetype: { type: String }
        },
        formOfStudy: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        libStatus: {
            type: String
        },
        interStatus: {
            type: String
        },
        pasportStatus: {
            type: String
        },
        departmentStatus: {
            type: String
        },
        accountingStatus: {
            type: String
        },
        campusStatus: {
            type: String
        },
        hrStatus: {
            type: String
        },
        docStatus: {
            type: String
        }
})

universitySchema.pre('validate', function(next) {
    if (this.fullName) {
        this.slug = slugify(this.fullName, {
            lower: true,
            strict: true
        })
    }

    next()
})

module.exports = mongoose.model('Student', universitySchema)