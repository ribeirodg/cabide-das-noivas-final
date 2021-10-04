'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cor.init({
    id_cor: DataTypes.INTEGER,
    descricao_cor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cor',
  });
  return cor;
};