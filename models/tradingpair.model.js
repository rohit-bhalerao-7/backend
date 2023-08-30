const { sequelize } = require('../config/db.config');
const { DataTypes } = require('sequelize');
const {Market} = require('./market.model.js');

const TradingPair = sequelize.define('TradingPair', {
    symbol: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    marketType: {
        type: DataTypes.STRING,
        references: {
            model: Market,
            key: 'type'
        }
    },
    lastMarketPrice: DataTypes.FLOAT,
    change24h: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    high24h: DataTypes.FLOAT,
    low24h: DataTypes.FLOAT,
    marketVolume: DataTypes.FLOAT
}, {
    modelName: 'tradingPair'
});

module.exports = TradingPair;
