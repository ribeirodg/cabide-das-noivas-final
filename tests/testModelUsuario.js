const {Usuario, sequelize} = require('../database/models');

Usuario.findByPk(1,{include:['Enderecos','Pedidos']}).then(
     u => {
         console.log(u.toJSON());
         sequelize.close();
     });

    // Usuario.findByPk(1).then(
    //     u => {
    //         console.log(u.toJSON());
    //         sequelize.close();
    //     }
    // )