const { gql } = require('apollo-server')
// const { buildSchema } = require('graphql')

const typeDefs = gql`
    
    type Query {
        info: String!
        questions(
            """
            The number of results to show. Must be >= 1. Default = 20
            """ 
            pageSize: Int

            """
            If you add a cursor here, it will only return results _after_ this cursor
            """
            after: String
        ): QuestionConnection!
        question(id: ID!): Question
        questionsByType(type: QuestionType): [Question]!
    }

    # type Mutation {
    #     createQuestion(
    #         question: Question
    #         choices: [Choice!]
    #     ): QuestionCreatedResponse!
    #     createQuestions(): QuestionCreatedResponse!
    # }

    type Question {
        id: ID!
        body: String
        type(type: QuestionType): String
        choices: [Choice!]!
    }

    type QuestionConnection {
        cursor: String
        hasMore: Boolean!
        questions: [Question]!
    }

    type Choice {
        id: ID!
        body: String,
        correct: String
    }

    enum QuestionType {
        MCQ
    }

    type QuestionCreatedResponse {
        success: Boolean!
        message: String
        question: [Question]
    }
`

// const resolvers = {
//     QuestionType: {
//         MCQ: 0,
//     }
// }

module.exports = typeDefs
