const mongoose = require('mongoose')
const slugify = require('slugify')

const studentSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    document: {
        dateOfBirth: {type: Date, required: true,},
        email: {type: String, required: true,},
        phone: {type: String, required: true,},
        passport: {
            file: { type: Buffer, required: true,},
            filename: { type: String, required: true,},
            mimetype: { type: String, required: true,},
        },
        vkr: {
            file: { type: Buffer, required: true,},
            filename: { type: String, required: true,},
            mimetype: { type: String, required: true,},
        },
        formOfStudy: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        createdAt: {type: Date, default: Date.now, required: true,},
        libStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        interStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        pasportStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        departmentStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        accountingStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        campusStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        hrStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        docStatus: {type: String, required: true, enum: ['В обработке', 'Завершён', 'Отклонён'], default: 'В обработке'},
        comment: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
    },
    graduationDate: {type: Date, required: true},
    slug: {type: String, required: true, unige: true},
})

studentSchema.pre('validate', function(next) {
    if (this.fullName) {
        this.slug = slugify(this.fullName, {
            lower: true,
            strict: true
        })
    }

    next()
})

module.exports = mongoose.model('Student1', studentSchema)