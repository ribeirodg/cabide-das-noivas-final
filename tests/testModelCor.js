const {Cor, sequelize} = require('../database/models');

 Cor.findByPk(60,{include:['Cores']}).then(
     c => {
         console.log(c.toJSON());
         sequelize.close();
     });

    // Cor.findByPk(60).then(
    //     c => {
    //         console.log(c.toJSON());
    //         sequelize.close();
    //     }
    // )