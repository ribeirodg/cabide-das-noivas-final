'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('pedido',
      [
      {
        id_pedido: 20,
        createdAt: '2021-10-07 22:00:01',
        usuario_id: 1,
        valor_total_pedido: 100,
        status: 'Pendente',
        endereco_usuario_id: 10
      },
      {
        id_pedido: 30,
        createdAt: '2021-10-08 23:00:01',
        usuario_id: 2,
        valor_total_pedido: 200,
        status: 'Pago',
        endereco_usuario_id: 11
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('pedido', null, {});
  }
};
