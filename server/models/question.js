'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    body: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsToMany(models.Choice, {
      through: 'question-choices',
      as: 'choices',
      otherKey: 'choice_id',
      foreignKey: 'question_id'
    })
  };
  return Question;
};