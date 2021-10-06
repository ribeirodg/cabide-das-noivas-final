// 'use strict';
// const {
//   // Model
// } = require('sequelize');
const colecao = require('../models/colecao');
const tamanho_vestido = require('../models/tamanho_vestido');
const cor = require('../models/cor');
const pedidos_has_vestido = require('../models/pedidos_has_vestidos');
module.exports = (sequelize, DataTypes) => {
  // class vestido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  // };
  const vestido = sequelize.define(
    'vestido',
    {
    id_vestido: DataTypes.INTEGER,
    nome_vestido: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    descricao_vestido: DataTypes.STRING,
    id_colecao: DataTypes.INTEGER,
    id_cor: DataTypes.INTEGER
  }, {
    tableName:'vestido',
    timestamps: false
    
  }
  );
  vestido.associate = (models) => {
        vestido.hasMany(models.tamanho_vestido, {as:'tamanhos', foreignKey:'vestido_id'});
        vestido.belongsTo(models.colecao, {as:'colecao', foreignKey:'id_colecao'});
        vestido.hasMany(models.cor, {as:'cores', foreignKey:'id_cor'});
        vestido.belongsTo(models.pedidos_has_vestido, {as:'pedido', foreignKey:'produto_id'});
  
}
return vestido;
}