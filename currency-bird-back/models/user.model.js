const { DataTypes } = require('sequelize');
const { dbConnection } = require('../database/config');

const User = dbConnection.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    referedBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
});

module.exports = User;