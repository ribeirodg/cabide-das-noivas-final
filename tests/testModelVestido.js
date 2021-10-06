const {vestido, sequelize} = require('../models/vestido');

vestido.findByPk(2,{include:['tamanhos','colecao','cores','pedido']}).then(
    v => {
        console.log(v.toJSON());
        sequelize.close();
    }
)