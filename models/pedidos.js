'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pedidos.init({
    id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    usuario_id: DataTypes.INTEGER,
    valor_total_pedido: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    enderecos_usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pedidos',
  });
  pedidos.associate = (models) => {
    pedidos.hasMany(models.pedidos_has_vestido, {as:'vestidos', foreignKey:'pedidos_id'});
    pedidos.belongsTo(models.usuario, {as:'usuario', foreignKey:'usuario_id'});
    pedidos.belongsTo(models.enderecos_usuario, {as:'endereco', foreignKey:'enderecos_usuario_id'});
  }
  return pedidos;
};