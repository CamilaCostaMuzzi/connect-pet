// coloca dentro da chaves pois sera uma variavel descontruida
// sera somente usada as duas bibliotescas
// sequelize que cria a conexao com banco e query types que sao os tipos de consultas
const {Sequelize, QueryTypes} = require('sequelize');

// importa as configurações de conexao com o banco
const config = require('./database/config/config.json').development;

//criando a minha conexao com o banco de dados
// new criar nova conexao
const conexao = new Sequelize(config);

// executar nova consulta
// primeiro parametro comando select e segundo paramentro 
conexao.query("SELECT * FROM USUARIOS", {type: QueryTypes.SELECT}).then(
    dados => {console.log(dados)
        process.exit();}
);

