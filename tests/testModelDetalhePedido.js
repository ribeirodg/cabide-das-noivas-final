const {DetalhePedido, sequelize} = require('../database/models');

DetalhePedido.findByPk(90,{include:['Tamanho','Vestido', 'Cor', 'Pedido']}).then(
     d => {
         console.log(d.toJSON());
         sequelize.close();
     });

    // DetalhePedido.findByPk(90).then(
    //     d => {
    //         console.log(d.toJSON());
    //         sequelize.close();
    //     }
    // )