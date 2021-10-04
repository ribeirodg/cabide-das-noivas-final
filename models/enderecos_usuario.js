'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enderecos_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  enderecos_usuario.init({
    idenderecos_usuario: DataTypes.INTEGER,
    logradouro_usuario: DataTypes.STRING,
    numero_usuario: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER,
    cep: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    complemento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'enderecos_usuario',
  });
  return enderecos_usuario;
};