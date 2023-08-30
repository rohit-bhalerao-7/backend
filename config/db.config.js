const {Sequelize} = require('sequelize');
const config = require('../config/config.json').development;  // Adjust as per your environment

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        port:5433,
        logging:console.log
        
    }
);
module.exports={
    sequelize
}