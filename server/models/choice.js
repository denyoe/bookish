'use strict';
module.exports = (sequelize, DataTypes) => {
  const Choice = sequelize.define('Choice', {
    body: DataTypes.STRING
  }, {});
  Choice.associate = function(models) {
    Choice.belongsToMany(models.Choice, {
      through: 'question-choices',
      as: 'questions',
      otherKey: {
        name: 'question_id',
        field: 'question_id'
      },
      foreignKey: {
        name: 'choice_id',
        field: 'choice_id'
      }
    })
  };
  return Choice;
};