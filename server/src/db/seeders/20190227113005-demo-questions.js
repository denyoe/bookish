'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let choices = []
    let questions = []
    let question_choices = []

    for (let i = 1; i <= 12; i++) {
      questions.push(
        { id: i, body: `Question ${i}`, type: 'MCQ' }
      )
    }

    for (let y = 1; y <= 36; y++) {
      choices.push(
        { id: y, body: `Choice ${y}` }
      )

      let question_id = y <= 3 ? 1 : Math.floor(y/3)

      question_choices.push(
        { question_id: question_id, choice_id: y, isCorrect: y % 3 === 0 },
      )
    }


    // console.log('here')

    return queryInterface.bulkInsert('questions', questions, {})
      .then(() => queryInterface.bulkInsert('choices', choices, {}))
      .then(() => queryInterface.bulkInsert('question-choices', question_choices, {}))
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('questions', null, {})
      .then(() => queryInterface.bulkDelete('choices', null, {}))
      .then(() => queryInterface.bulkDelete('question-choices', null, {}))
  }
};
