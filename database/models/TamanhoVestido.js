module.exports = (sequelize, DataTypes) => {

  const tamanho_vestido = sequelize.define(
      'TamanhoVestido',
   {
    id_tamanho_vestido: {type: DataTypes.INTEGER, primaryKey:true},
    tamanho_id: DataTypes.INTEGER,
    vestido_id: DataTypes.INTEGER
  }, {
    tableName:'tamanho_vestido',
    timestamps: false
  });
  tamanho_vestido.associate = (models) => {
    tamanho_vestido.belongsTo(models.Tamanho, {as:'Tamanho', foreignKey:'tamanho_id'});
    tamanho_vestido.belongsTo(models.Vestido, {as:'Vestido', foreignKey:'vestido_id'});
  }

  return tamanho_vestido;
};