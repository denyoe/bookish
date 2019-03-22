const Question = require('../db/models/question')

const getQuestions = async () => {
    const found = await Question.find()

    return found && found.length
        ? found
        : []
}

export default {
    getQuestions
}