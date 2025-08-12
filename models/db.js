const { Sequelize } = require('sequelize');

// Criar conexão
const sequelize = new Sequelize(
    "cadastro", // nome do banco
    "root",     // usuário
    "Az061236", // senha
    {
        host: "localhost",
        dialect: "mysql"
    }
);

// Testar conexão
sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.log('Erro ao conectar: ' + err));

module.exports = {
    Sequelize,  
    sequelize   
};
