'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vestidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_vestido: {
        type: Sequelize.INTEGER// não faz sentido ter essa ID vestido. Não foi feito uma ligação.
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
    await queryInterface.dropTable('vestidos');
  }
};