'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DetalhePedidos', {
      id_detalhe_pedidos: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido_id: {
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valor_unitario: {
        type: Sequelize.DECIMAL
      },
      tamanho_vestido_id: {
        type: Sequelize.INTEGER
      },
      vestido_id: {
        type: Sequelize.INTEGER
      },
      cor_vestido_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DetalhePedidos');
  }
};