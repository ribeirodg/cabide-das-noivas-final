module.exports = (sequelize, DataTypes) => {

  const cor = sequelize.define(
      'Cor',
   {
    id_cor: {type: DataTypes.INTEGER, primaryKey:true},
    descricao_cor: DataTypes.STRING
  }, {
    tableName:'cor',
    timestamps: false
  });

  cor.associate = (models) => {
    cor.hasMany(models.CorVestido, {as:'Cores', foreignKey:'cor_id'});
  }

  return cor;
};