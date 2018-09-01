'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Artists', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      disambiguation: {
          type: Sequelize.STRING,
          allowNull: true
      },
      isFollowed: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false 
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Artists');
  }
};
