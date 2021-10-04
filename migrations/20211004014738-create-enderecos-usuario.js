'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idenderecos_usuario: {
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos_usuarios');
  }
};