const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('Document', documentSchema)