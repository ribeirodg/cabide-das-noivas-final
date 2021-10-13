module.exports = (sequelize, DataTypes) => {

  const cor_vestido = sequelize.define(
      'CorVestido',
   {
    id_cor_vestido: {type: DataTypes.INTEGER, primaryKey:true},
    vestido_id: DataTypes.INTEGER,
    cor_id: DataTypes.INTEGER
  }, {
    tableName:'cor_vestido',
    timestamps: false
  });

  cor_vestido.associate = (models) => {
    cor_vestido.belongsTo(models.Vestido, {as:'Vestido', foreignKey:'vestido_id'});
    cor_vestido.belongsTo(models.Cor, {as:'Cor', foreignKey:'cor_id'});
  }

  return cor_vestido;
};