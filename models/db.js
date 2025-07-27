const  Sequelize  = require('sequelize');  

const sequelize = new Sequelize(
    "cadastro",     
    "root",         
    "Az061236",     
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate()
    .then(function () {
        console.log("Banco de dados conectado com sucesso");
    })
    .catch(function (erro) {
        console.log("Erro ao se conectar ao banco de dados:");
    });

module.exports = {
    sequelize               
};
