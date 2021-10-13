module.exports = (sequelize, DataTypes) => {

  const detalhe_pedido = sequelize.define(
      'DetalhePedido',
   {
    id_detalhe_pedido: {type: DataTypes.INTEGER, primaryKey:true},
    pedido_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    valor_unitario: DataTypes.DECIMAL,
    tamanho_vestido_id: DataTypes.INTEGER,
    vestido_id: DataTypes.INTEGER,
    cor_vestido_id: DataTypes.INTEGER
  }, {
    tableName:'detalhe_pedido',
    timestamps: false
  });

  detalhe_pedido.associate = (models) => {
    detalhe_pedido.belongsTo(models.TamanhoVestido, {as:'Tamanho', foreignKey:'tamanho_vestido_id'});
    detalhe_pedido.belongsTo(models.Vestido, {as:'Vestido', foreignKey:'vestido_id'});
    detalhe_pedido.belongsTo(models.CorVestido, {as:'Cor', foreignKey:'cor_vestido_id'});
    detalhe_pedido.belongsTo(models.Pedido, {as:'Pedido', foreignKey:'pedido_id'});
  }


  return detalhe_pedido;
};