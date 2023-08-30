const { sequelize } = require('../config/db.config');
const { DataTypes } = require('sequelize');

const Market = sequelize.define('Market', {
    type: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    description: DataTypes.STRING
}, {
    modelName: 'market'
});

module.exports = Market;
