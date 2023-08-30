const {DataTypes} = require('sequelize')
const {sequelize}= require('../config/db.config')

    const Token = sequelize.define('Token', {
      token_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      token_name: DataTypes.STRING,
      token_symbol: DataTypes.STRING,
      contract_address: DataTypes.STRING,
      decimals: DataTypes.INTEGER
    });
  
    module.exports = {
        Token
    }