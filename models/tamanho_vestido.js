'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tamanho_vestido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tamanho_vestido.init({
    id: DataTypes.INTEGER,
    codigo: DataTypes.INTEGER,
    tamanho: DataTypes.STRING,
    vestido_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tamanho_vestido',
  });
  return tamanho_vestido;
};