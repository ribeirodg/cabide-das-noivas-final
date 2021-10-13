'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('tamanho',
      [
      {
        id_tamanho: 30,
        codigo: 'P',
        descricao: 'Pequeno'
      },
      {
        id_tamanho: 31,
        codigo: 'M',
        descricao: 'Médio'
      },
      {
        id_tamanho: 32,
        codigo: 'G',
        descricao: 'Grande'
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('tamanho', null, {});
  }
};
