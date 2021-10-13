'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EnderecoUsuarios', {
      id_endereco_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro_usuario: {
        type: Sequelize.STRING
      },
      numero_usuario: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EnderecoUsuarios');
  }
};