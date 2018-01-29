'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    view: DataTypes.STRING,
    tagline: DataTypes.STRING,
    description: DataTypes.STRING,
    winner_quantity: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    text: DataTypes.TEXT,
    question: DataTypes.STRING,
    event_start: DataTypes.STRING,
    event_end: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};