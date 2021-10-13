module.exports = (sequelize, DataTypes) => {

  const endereco_usuario = sequelize.define(
      'EnderecoUsuario',
   {
    id_endereco_usuario: {type: DataTypes.INTEGER, primaryKey:true},
    logradouro_usuario: DataTypes.STRING,
    numero_usuario: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER,
    cep: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    complemento: DataTypes.STRING
  }, {
    tableName:'endereco_usuario',
    timestamps: false
  });

  endereco_usuario.associate = (models) => {
    endereco_usuario.hasMany(models.Pedido, {as:'Pedidos', foreignKey:'id_pedido'});
    endereco_usuario.belongsTo(models.Usuario, {as:'Usuario', foreignKey:'usuario_id'});
  }

  return endereco_usuario;
};