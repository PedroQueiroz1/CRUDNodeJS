const Sequelize = require("sequelize"),
    dbConfig = require ("../config/database"),
    connection = new Sequelize(dbConfig)

module.exports = connection