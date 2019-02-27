'use strict';
module.exports = (sequelize, DataTypes) => {
  const Choice = sequelize.define('Choice', {
    body: DataTypes.STRING
  }, {});
  Choice.associate = function(models) {
    Choice.belongsToMany(models.Choice, {
      through: 'question-choices',
      as: 'questions',
      foreignKey: 'choice_id'
    })
  };
  return Choice;
};