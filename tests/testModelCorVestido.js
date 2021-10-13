const {CorVestido, sequelize} = require('../database/models');

CorVestido.findByPk(70,{include:['Vestido', 'Cor']}).then(
     c => {
         console.log(c.toJSON());
         sequelize.close();
     });

    // CorVestido.findByPk(70).then(
    //     c => {
    //         console.log(c.toJSON());
    //         sequelize.close();
    //     }
    // )