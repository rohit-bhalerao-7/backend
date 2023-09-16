const {sequelize}= require('../config/db.config')
const {DataTypes} = require('sequelize')

    const Order = sequelize.define('Order', {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      order_type: DataTypes.ENUM('buy', 'sell'),
      amount: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      trading_pair: DataTypes.STRING, 
      status: DataTypes.ENUM('open', 'partially_filled', 'filled', 'cancelled'),
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
module.exports ={
    Order
}
  