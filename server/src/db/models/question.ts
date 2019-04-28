import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
    body: String,
    choices: [{
        body: String,
        correct: Boolean
    }]
})

export default mongoose.model('Question', questionSchema)
