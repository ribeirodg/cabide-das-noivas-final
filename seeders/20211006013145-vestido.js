'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 console.log('entrou no seed')
return await queryInterface.bulkInsert('vestido', [{
     id: 1,
     nome_vestido:"Romantico 1",
     preco: 1500,
     descricao_vestido: "esse é o modelo romantico",
     id_colecao: 1,
     id_cor: 1
    }
  ]);
    
  },

  down: async (queryInterface, Sequelize) => {
   
     return await queryInterface.bulkDelete('vestido', null, {});
     
  }
};
