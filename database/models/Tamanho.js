module.exports = (sequelize, DataTypes) => {

  const tamanho = sequelize.define(
      'Tamanho',
   {
    id_tamanho: {type: DataTypes.INTEGER, primaryKey:true},
    codigo: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    tableName:'tamanho',
    timestamps: false
  });
  tamanho.associate = (models) => {
    tamanho.hasMany(models.TamanhoVestido, {as:'Vestidos', foreignKey:'tamanho_id'});
  }

  return tamanho;
};