'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
return await queryInterface.bulkInsert('tamanho_vestido', [{
     id: 1,
     codigo:1,
     tamanho: 'G'
    },
    {
      id: 2,
     codigo:2,
     tamanho: 'M'
    }
  ]);
    
  },

  down: async (queryInterface, Sequelize) => {
   
     return await queryInterface.bulkDelete('tamanho_vestido', null, {});
     
  }
};
