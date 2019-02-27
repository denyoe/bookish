'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('question-choices', {
      question_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // references: {
        //   model: 'questions',
        //   key: 'id'
        // },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      choice_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // references: {
        //   model: 'choices',
        //   key: 'id'
        // },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('question-choices')
  }
};
