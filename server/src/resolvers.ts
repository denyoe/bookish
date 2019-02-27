import QuestionAPI from './datasources/question'

export default {
    Query: {
        info: () => `This is the API of a the Literate Quiz`,
        questions: async (_, __, {}) => QuestionAPI.getQuestions()
    },
}