module.exports = (sequelize, DataTypes) => {

  const usuario = sequelize.define(
      'Usuario',
   {
  id_usuario: {type: DataTypes.INTEGER, primaryKey:true},
  nome: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  nick_name: DataTypes.STRING,
  senha: DataTypes.STRING
  },
      {
          tableName:'usuario',
          timestamps: false
      }
  );

usuario.associate = (models) => {
  usuario.hasMany(models.EnderecoUsuario, {as:'Enderecos', foreignKey:'usuario_id'});
  usuario.hasMany(models.Pedido, {as:'Pedidos', foreignKey:'usuario_id'});
}


return usuario;
};