const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    body: String,
    choices: [{
        body: String,
        correct: Boolean
    }]
})

questionSchema.methods.setChoice = function(choice) {
    return this.model('Question').choices.push({
        body: choice.body,
        correct: choice.correct
    })
}

module.exports = mongoose.model('Question', questionSchema)