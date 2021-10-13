'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('endereco_usuario',
      [
      {
        id_endereco_usuario: 10,
        logradouro_usuario: 'Rua Alfa',
        numero_usuario: '10',
        usuario_id: 1,
        cep: '02515020',
        estado: 'SP',
        cidade: 'São Paulo',
        complemento: 'Apto. 1',
      },
      {
        id_endereco_usuario: 11,
        logradouro_usuario: 'Rua Beta',
        numero_usuario: '11',
        usuario_id: 2,
        cep: '02515021',
        estado: 'SP',
        cidade: 'São Paulo',
        complemento: 'Apto. 2',
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('endereco_Usuario', null, {});
  }
};
