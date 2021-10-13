'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vestidos', {
      id_vestido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_vestido: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.DECIMAL
      },
      descricao_vestido: {
        type: Sequelize.STRING
      },
      id_colecao: {
        type: Sequelize.INTEGER
      },
      id_cor: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vestidos');
  }
};