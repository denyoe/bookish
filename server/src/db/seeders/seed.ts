const models = require('../db/models')

models.Question.create({
    body: '',
    type: 'MCQ'
})

models.Choice.create({
    body: ''
})

// const getQuestions = async () => {
//     const found = await models.Question.findAll({
//         include: [{
//             // all: true
//             model: models.Choice,
//             as: 'choices'
//         }]
//     })

//     // Append isCorrect attribute from 'question-choices to each choice
//     found.map(item => {
//         item['cursor'] = item.id
//         item.choices.map(choice => {
//             choice['correct'] = choice['question-choices'].isCorrect
//         })
//     })

//     // console.log(found[0].choices[0]['isCorrect'])

//     return found && found.length
//         ? found
//         : []
// }