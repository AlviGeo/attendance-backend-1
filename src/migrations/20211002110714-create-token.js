'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tokens', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        ref: "User",
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "343512"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        expires: 3600
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: new Date(),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tokens');
  }
};