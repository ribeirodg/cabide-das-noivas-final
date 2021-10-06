// 'use strict';
// const {
//   Model
// } = require('sequelize');
const colecao = require('../models/colecao');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuario.init({
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  pedidos.associate = (models) => {
    usuario.hasMany(models.pedidos, {as:'pedidos', foreignKey:'usuario_id'});
    usuario.hasMany(models.eenderecos_usuario, {as:'enderecos', foreignKey:'usuario_id'});
  }
  return usuario;
};