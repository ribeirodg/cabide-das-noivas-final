'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vestido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vestido.init({
    id_vestido: DataTypes.INTEGER,
    nome_vestido: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    descricao_vestido: DataTypes.STRING,
    id_colecao: DataTypes.INTEGER,
    id_cor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vestido',
  });
  u.associate = (models) => {
        v.hasMany(models.Contato, {as:'contatos', foreignKey:'usuarios_id'});
  return vestido;
};