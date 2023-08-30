const {DataTypes} = require('sequelize')
const {sequelize}= require('../config/db.config')

    const Trade = sequelize.define('Trade', {
      trade_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount_traded: DataTypes.DOUBLE,
      trade_price: DataTypes.DOUBLE,
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
module.exports = {
    Trade
}