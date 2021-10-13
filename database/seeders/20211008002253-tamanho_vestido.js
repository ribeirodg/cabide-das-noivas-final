'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('tamanho_vestido',
      [
      {
        id_tamanho_vestido: 80,
        vestido_id: 50,
        tamanho_id: 30
      },
      {
        id_tamanho_vestido: 81,
        vestido_id: 50,
        tamanho_id: 31
      },
      {
        id_tamanho_vestido: 82,
        vestido_id: 50,
        tamanho_id: 32
      },
      {
        id_tamanho_vestido: 83,
        vestido_id: 51,
        tamanho_id: 30
      },
      {
        id_tamanho_vestido: 84,
        vestido_id: 51,
        tamanho_id: 31
      },
      {
        id_tamanho_vestido: 85,
        vestido_id: 51,
        tamanho_id: 32
      },
      {
        id_tamanho_vestido: 86,
        vestido_id: 52,
        tamanho_id: 30
      },
      {
        id_tamanho_vestido: 87,
        vestido_id: 52,
        tamanho_id: 31
      },
      {
        id_tamanho_vestido: 88,
        vestido_id: 52,
        tamanho_id: 32
      },
      {
        id_tamanho_vestido: 89,
        vestido_id: 53,
        tamanho_id: 30
      },
      {
        id_tamanho_vestido: 90,
        vestido_id: 53,
        tamanho_id: 31
      },
      {
        id_tamanho_vestido: 91,
        vestido_id: 53,
        tamanho_id: 32
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('tamanho_vestido', null, {});
  }
};
