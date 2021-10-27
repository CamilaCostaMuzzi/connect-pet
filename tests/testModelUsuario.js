
const { Usuario, sequelize } = require('../database/models');

Usuario.findByPk(1).then(
    u=> {
        console.log(u.toJSON());
        sequelize.close();
        }
)

Usuario.findAll().then(
    usuarios => console.log(usuarios.map(u => u.toJSON()))
)
// Criar uma linha na tabela
/*Usuario.create({nome:"Arthur Gabriel", nome_usuario:"ArthurGabriel", email:"arthurgabriel@outlook.com", senha:"123456asd"}).then(
     usuarios => console.log(usuarios.map(u => u.toJSON()))
)*/

