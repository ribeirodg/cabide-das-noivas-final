module.exports = (sequelize, DataTypes) => {

  const vestido = sequelize.define(
      'Vestido',
   {
    id_vestido: {type: DataTypes.INTEGER, primaryKey:true},
    nome_vestido: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    descricao_vestido: DataTypes.STRING,
    colecao_id: DataTypes.INTEGER,
  }, {
    tableName:'vestido',
    timestamps: false
  });
  vestido.associate = (models) => {
    vestido.hasMany(models.TamanhoVestido, {as:'Tamanhos', foreignKey:'vestido_id'});
    vestido.hasMany(models.CorVestido, {as:'Cores', foreignKey:'vestido_id'});
    vestido.hasMany(models.DetalhePedido, {as:'Pedidos', foreignKey:'vestido_id'});
    vestido.belongsTo(models.Colecao, {as:'Colecao', foreignKey:'colecao_id'});
  }

  return vestido;
};