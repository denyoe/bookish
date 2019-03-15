import gql from 'graphql-tag'

export const GET_QUESTIONS = gql`
        query questionList($after: String) {
            questions(pageSize: 3, after: $after) {
                cursor
                hasMore
                questions {
                    id
                    body
                    choices {
                        id
                        body
                        correct
                    }
                }
            }
        }
    `;