'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      view: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tagline: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      winner_quantity: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      discount: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      text: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      question: {
        allowNull: true,
        type: Sequelize.STRING
      },
      event_start: {
        allowNull: true,
        type: Sequelize.STRING
      },
      event_end: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};