const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    body: String,
    choices: [{
        body: String,
        correct: Boolean
    }]
})

module.exports = mongoose.model('Question', questionSchema)