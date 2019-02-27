// const { DataSource } = require('apollo-datasource');
// const questions = require('../../models/question')()
// const choices = require('../../models/choice')
const models = require('../../models')

// class QuestionAPI extends DataSource {
//     constructor({ store }) {
//         super();
//         this.store = store;
//     }

//     /**
//      * This is a function that gets called by ApolloServer when being setup.
//      * This function gets called with the datasource config including things
//      * like caches and context. We'll assign this.context to the request context
//      * here, so we can know about the user making requests
//      */
//     initialize(config) {
//         this.context = config.context;
//     }

//     async getQuestions() {
//         const found = await this.store.questions.findAll()

//         return found && found.length
//             ? found
//             : []
//     }

//     async getQuestionsByType() {
//         const found = await this.store.questions.findAll({
//             where: { type: 'MCQ' }
//         })

//         return found && found.length
//                 ? found
//                 : []
//     }
// }

const getQuestions = async () => {
    const found = await models.Question.findAll()

    return found && found.length
        ? found
        : []
}

const getQuestionsByType = async (type: String) => {
    const found = await models.Choice.findAll({
        where: { type: 'MCQ' }
    })

    return found && found.length
            ? found
            : []
}

export default {
    getQuestions,
    getQuestionsByType
}