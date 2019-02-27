const { gql } = require('apollo-server')
// const { buildSchema } = require('graphql')

const typeDefs = gql`
    
    type Query {
        info: String!
        questions: [Question]!
        question(id: ID!): Question
        questionsByType(type: QuestionType): [Question]!
    }

    type Question {
        id: ID!
        body: String
        type(type: QuestionType): String
        choices: [Choice!]!
    }

    type Choice {
        id: ID!
        body: String
        isCorrect: Boolean!
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
