'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

     return await queryInterface.bulkInsert('usuario',
     [
      {
        id_usuario: 1,
        nome: 'Daiane Ribeiro',
        telefone: 912345678,
        email: 'daiane@bbm.com.br',
        nick_name: 'daiane',
        senha: bcrypt.hashSync('naosei',10)
      },
      {
        id_usuario: 2,
        nome: 'Alessandra Ribeiro',
        telefone: 923456789,
        email: 'alessandra@capgemini.com.br',
        nick_name: 'alessandra',
        senha: bcrypt.hashSync('tambemnaosei',10)
      }
     ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('usuario', null, {});
  }
};
