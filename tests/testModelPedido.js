const {Pedido, sequelize} = require('../database/models');

Pedido.findByPk(20,{include:['Detalhes','Usuario', 'Endereco']}).then(
     p => {
         console.log(p.toJSON());
         sequelize.close();
     });

    // Pedido.findByPk(20).then(
    //     p => {
    //         console.log(p.toJSON());
    //         sequelize.close();
    //     }
    // )