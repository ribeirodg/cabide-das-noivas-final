const {TamanhoVestido, sequelize} = require('../database/models');

TamanhoVestido.findByPk(80,{include:['Tamanho','Vestido']}).then(
     t => {
         console.log(t.toJSON());
         sequelize.close();
     });

    // TamanhoVestido.findByPk(80).then(
    //     t => {
    //         console.log(t.toJSON());
    //         sequelize.close();
    //     }
    // )