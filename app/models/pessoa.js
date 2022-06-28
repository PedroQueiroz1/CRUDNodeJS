const Sequelize = require("sequelize"),
    database = require("../../database/index");

const Pessoa = database.define('pessoas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numero:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamp: false
});

// ATENÇÃO!!! ---> COMENTAR A LINHA ABAIXO DEPOIS DE EXECUTAR <---
//Pessoa.sync({force: true});