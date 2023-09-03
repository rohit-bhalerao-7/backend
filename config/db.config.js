const {Sequelize} = require('sequelize');
const config = require('../config/config.json').development;  // Adjust as per your environment

const sequelize = new Sequelize({
    dialect: 'postgres', // The dialect for PostgreSQL
    host: 'localhost', // Your PostgreSQL database host
    port: 5432, // Default PostgreSQL port
    username: 'postgres', // Your database username
    password: 'Rohitps123', // Your database password
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

