module.exports = (sequelize, DataTypes) => {

  const colecao = sequelize.define(
      'Colecao',
   {
    id_colecao: {type: DataTypes.INTEGER, primaryKey:true},
    nome_colecao: DataTypes.STRING
  }, {
    tableName:'colecao',
    timestamps: false
});

   colecao.associate = (models) => {
     colecao.hasMany(models.Vestido, {as:'Vestidos', foreignKey:'colecao_id'});
   }

  return colecao;
};