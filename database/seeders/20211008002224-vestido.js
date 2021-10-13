'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('vestido',
      [
      {
        id_vestido: 50,
        nome_vestido: 'Nome vestido 1',
        preco: 1500,
        descricao_vestido: 'Descrição do vestido 1',
        colecao_id: 40
      },
      {
        id_vestido: 51,
        nome_vestido: 'Nome vestido 2',
        preco: 1600,
        descricao_vestido: 'Descrição do vestido 2',
        colecao_id: 40
      },
      {
        id_vestido: 52,
        nome_vestido: 'Nome vestido 3',
        preco: 1700,
        descricao_vestido: 'Descrição do vestido 3',
        colecao_id: 41
      },
      {
        id_vestido: 53,
        nome_vestido: 'Nome vestido 4',
        preco: 1800,
        descricao_vestido: 'Descrição do vestido 4',
        colecao_id: 41
      },
      {
        id_vestido: 54,
        nome_vestido: 'Nome vestido 5',
        preco: 1900,
        descricao_vestido: 'Descrição do vestido 5',
        colecao_id: 42
      },
      {
        id_vestido: 55,
        nome_vestido: 'Nome vestido 6',
        preco: 2000,
        descricao_vestido: 'Descrição do vestido 6',
        colecao_id: 42
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('vestido', null, {});
  }
};
