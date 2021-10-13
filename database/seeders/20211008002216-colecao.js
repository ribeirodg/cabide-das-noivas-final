'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('colecao',
      [
      {
        id_colecao: 40,
        nome_colecao: 'Romântica'
      },
      {
        id_colecao: 41,
        nome_colecao: 'Clássica'
      },
      {
        id_colecao: 42,
        nome_colecao: 'Sensual'
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('colecao', null, {});
  }
};
