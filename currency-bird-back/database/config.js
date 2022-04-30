const { Sequelize } = require ('sequelize');

const dbConnection = new Sequelize({
    database: process.env.DATABASE_NAME,
    dialect: process.env.DIALECT,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
});

module.exports = {
    dbConnection
}
