const {EnderecoUsuario, sequelize} = require('../database/models');

EnderecoUsuario.findByPk(10,{include:['Pedidos','Usuario']}).then(
     e => {
         console.log(e.toJSON());
         sequelize.close();
     });

    // EnderecoUsuario.findByPk(10).then(
    //     e => {
    //         console.log(e.toJSON());
    //         sequelize.close();
    //     }
    // )