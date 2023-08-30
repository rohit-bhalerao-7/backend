const {sequelize}= require('../config/db.config')
const { DataTypes}= require('sequelize');
const {UserWallet} = require('./wallet.model')

    const User = sequelize.define('User', {
      user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      encrypted_password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      "2fa_enabled": {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull:true
      },
      last_login: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull:true
      }
    });
  
    module.exports = {
        User
    }
  