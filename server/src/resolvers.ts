import QuestionAPI from './datasources/question'
import { paginateResults } from './utils'

export default {
    Query: {
        info: () => `This is the API of the Bookish Quiz`,
        questions: async (_, { pageSize = 20, after }, {}) => {
            const allQuestions = await QuestionAPI.getQuestions()

            const questions = paginateResults({
                after,
                pageSize,
                results: allQuestions,
                getCursor: (item) => item.id
            })

            return {
                questions,
                cursor: questions.length ? questions[questions.length - 1].id : null,
                // if the cursor of the end of the paginated results is the same as the
                // last item in _all_ results, then there are no more results after this
                hasMore: questions.length
                    ? questions[questions.length - 1].id !==
                    allQuestions[allQuestions.length - 1].id
                    : false,
            }
        },
    },
}