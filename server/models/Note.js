const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }
})

const NoteModel = mongoose.model('notes', NoteSchema)

module.exports = NoteModel