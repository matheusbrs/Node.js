const db = require("./db");

const Produto = db.sequelize.define("produtos", {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: db.Sequelize.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
});

// Criar tabela se não existir
Produto.sync({ force: false });

module.exports = Produto;
