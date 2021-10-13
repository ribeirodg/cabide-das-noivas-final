'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('cor_vestido',
      [
      {
        id_cor_vestido: 70,
        vestido_id: 50,
        cor_id: 60
      },
      {
        id_cor_vestido: 71,
        vestido_id: 50,
        cor_id: 61
      },
      {
        id_cor_vestido: 72,
        vestido_id: 51,
        cor_id: 60
      },
      {
        id_cor_vestido: 73,
        vestido_id: 51,
        cor_id: 61
      },
      {
        id_cor_vestido: 74,
        vestido_id: 52,
        cor_id: 60
      },
      {
        id_cor_vestido: 75,
        vestido_id: 52,
        cor_id: 61
      },
      {
        id_cor_vestido: 76,
        vestido_id: 53,
        cor_id: 60
      },
      {
        id_cor_vestido: 77,
        vestido_id: 53,
        cor_id: 61
      },
      {
        id_cor_vestido: 78,
        vestido_id: 54,
        cor_id: 60
      },
      {
        id_cor_vestido: 79,
        vestido_id: 54,
        cor_id: 61
      },
      {
        id_cor_vestido: 80,
        vestido_id: 55,
        cor_id: 60
      },
      {
        id_cor_vestido: 81,
        vestido_id: 55,
        cor_id: 61
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('cor_vestido', null, {});
  }
};
