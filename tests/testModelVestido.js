const {Vestido, sequelize} = require('../database/models');

 Vestido.findByPk(50,{include:['Tamanhos','Colecao','Cores','Pedidos']}).then(
     v => {
         console.log(v.toJSON());
         sequelize.close();
     });

    // Vestido.findByPk(50).then(
    //     v => {
    //         console.log(v.toJSON());
    //         sequelize.close();
    //     }
    // )