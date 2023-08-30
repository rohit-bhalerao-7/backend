// redisConfig.js
const {Redis} = require('ioredis');

const redis = new Redis({
    host: '127.0.0.1', // your Redis host (this is the default for local development)
    port: 6379  // your Redis port (this is the default)
});

module.exports = redis;
