'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id_pedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      valor_total_pedido: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      endereco_usuario_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pedidos');
  }
};