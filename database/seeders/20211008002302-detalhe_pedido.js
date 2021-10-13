'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('detalhe_pedido',
      [
      {
        id_detalhe_pedido: 90,
        pedido_id: 20,
        quantidade: 1,
        valor_unitario: 1500,
        tamanho_vestido_id: 80,
        vestido_id: 50,
        cor_vestido_id: 70
      },
      {
        id_detalhe_pedido: 91,
        pedido_id: 20,
        quantidade: 2,
        valor_unitario: 1600,
        tamanho_vestido_id: 83,
        vestido_id: 51,
        cor_vestido_id: 72
      },
      {
        id_detalhe_pedido: 92,
        pedido_id: 30,
        quantidade: 1,
        valor_unitario: 1700,
        tamanho_vestido_id: 86,
        vestido_id: 52,
        cor_vestido_id: 74
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('detalhe_pedido', null, {});
  }
};
