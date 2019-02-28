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

  //  const choices = [
  //    { id: 1, body: 'Choice 1' },
  //    { id: 2, body: 'Choice 2' },
  //    { id: 3, body: 'Choice 3' },
  //    { id: 4, body: 'Choice 4' },
  //    { id: 5, body: 'Choice 5' },
  //    { id: 6, body: 'Choice 6' },
  //    { id: 7, body: 'Choice 7' },
  //   ]

    // const questions = [
    //   {
    //     id: 1, 
    //     body: 'Question 1',
    //     type: 'MCQ'
    //   },
    //   {
    //     id: 2, 
    //     body: 'Question 2',
    //     type: 'MCQ'
    //   },
    //   {
    //     id: 3, 
    //     body: 'Question 3',
    //     type: 'MCQ'
    //   }
    // ]

    // const question_choices = [
    //   { question_id: 1, choice_id: 1, isCorrect: true },
    //   { question_id: 1, choice_id: 2 },
    //   { question_id: 1, choice_id: 3 },
    //   { question_id: 2, choice_id: 4 },
    //   { question_id: 2, choice_id: 5, isCorrect: true },
    //   { question_id: 2, choice_id: 6 },
    //   { question_id: 3, choice_id: 5 },
    //   { question_id: 3, choice_id: 7, isCorrect: true },
    // ]

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
