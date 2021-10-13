'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('cor',
      [
      {
        id_cor: 60,
        descricao_cor: 'Branca'
      },
      {
        id_cor: 61,
        descricao_cor: 'Rosa'
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('cor', null, {});
  }
};
