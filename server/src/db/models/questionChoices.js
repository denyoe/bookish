'use strict';
module.exports = (sequelize, DataTypes) => {
    const QuestionChoices = sequelize.define('question-choices', {
        isCorrect: DataTypes.BOOLEAN,
    }, {})
    return QuestionChoices;
};