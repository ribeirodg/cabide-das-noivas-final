module.exports = (sequelize, DataTypes) => {

  const pedido = sequelize.define(
      'Pedido',
   {

    id_pedido: {type: DataTypes.INTEGER,  primaryKey: true},
    createdAt: DataTypes.DATE,
    usuario_id: DataTypes.INTEGER,
    valor_total_pedido: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    endereco_usuario_id: DataTypes.INTEGER
  }, {
    tableName:'pedido',
    timestamps: false
  });

  pedido.associate = (models) => {
    pedido.hasMany(models.DetalhePedido, {as:'Detalhes', foreignKey:'pedido_id'});
    pedido.belongsTo(models.Usuario, {as:'Usuario', foreignKey:'usuario_id'});
    pedido.belongsTo(models.EnderecoUsuario, {as:'Endereco', foreignKey:'endereco_usuario_id'});
  }

  return pedido;
};