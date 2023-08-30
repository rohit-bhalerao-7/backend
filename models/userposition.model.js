const { sequelize } = require('../config/db.config');
const { DataTypes } = require('sequelize');

const UserPosition = sequelize.define('UserPosition', {
    market: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: DataTypes.FLOAT,
    value: DataTypes.FLOAT,
    side: {
        type: DataTypes.ENUM('buy', 'sell'),  // Updated to ENUM as suggested in your comment.
        allowNull: false
    },
    unrealisedPL: DataTypes.FLOAT,
    realisedPL: DataTypes.FLOAT
}, {
    modelName: 'userPosition'
});

module.exports = UserPosition;
