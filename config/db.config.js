const {Sequelize} = require('sequelize');
const config = require('../config/config.json').development;  // Adjust as per your environment

const sequelize = new Sequelize({
    dialect: 'postgres', // The dialect for PostgreSQL
    host: '172.31.64.1', // Your PostgreSQL database host
    port: 5432, // Default PostgreSQL port
    username: 'DB_CORE_USER', // Your database username
    password: 'DB_CORE_PASSWORD', // Your database password
    database: 'ManthanDEX', // Your database name
  });
  
console.log(config);

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports={
    sequelize
}

