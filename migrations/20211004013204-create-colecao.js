'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('colecaos', {
      id: {
        allowNull: false, // pode ter a create vestido. Primeiro roda a coleção, cor e depois a migration de vestido.
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_colecao: {// remover esse ID.
        type: Sequelize.INTEGER
      },
      nome_colecao: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('colecaos');
  }
};