import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
    body: String,
    choices: [{
        body: String,
        correct: Boolean
    }]
})

// questionSchema.methods.setChoice = function(choice) {
//     return this.model('Question').choices.push({
//         body: choice.body,
//         correct: choice.correct
//     })
// }

export default mongoose.model('Question', questionSchema)
