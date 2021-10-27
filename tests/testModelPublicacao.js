const { Publicacao, sequelize } = require('../database/models');

Publicacao.findByPk(1, {include:['comentarios']}).then(
    p=> {
        console.log(p.toJSON());
        sequelize.close();
        }
)
/*
Publicacao.findAll().then(
    publicacoes => console.log(publicacoes.map(p => p.toJSON()))
)*/
