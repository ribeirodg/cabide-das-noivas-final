const {Colecao, sequelize} = require('../database/models');

Colecao.findByPk(40,{include:['Vestidos']}).then(
    c => {
        console.log(c.toJSON());
        sequelize.close();
    }
)
    // Colecao.findByPk(40).then(
    //     c => {
    //         console.log(c.toJSON());
    //         sequelize.close();
    //     }
    // )