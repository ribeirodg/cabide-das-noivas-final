'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedidos_has_vestidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pedidos_has_vestidos.init({
    pedidos_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    valor_total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'pedidos_has_vestidos',
  });
  return pedidos_has_vestidos;
};