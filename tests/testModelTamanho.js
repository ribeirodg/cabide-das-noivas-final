const {Tamanho, sequelize} = require('../database/models');

Tamanho.findByPk(30,{include:['Vestidos']}).then(
     t => {
         console.log(t.toJSON());
         sequelize.close();
     });

    // Tamanho.findByPk(30).then(
    //     t => {
    //         console.log(t.toJSON());
    //         sequelize.close();
    //     }
    // )