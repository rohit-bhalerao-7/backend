const {DataTypes} = require('sequelize')
const {sequelize}= require('../config/db.config')

    const UserWallet = sequelize.define('UserWallet', {
      wallet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      balance: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      public_key: DataTypes.STRING
    });
  
    module.exports = {
        UserWallet
    }
  