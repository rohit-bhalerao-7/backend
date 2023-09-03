const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'DEX API',
        version: '1.0.0',
        description: 'API documentation for the Decentralized Exchange (DEX) platform',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server',
        },
    ],
    components: {
        schemas: {
            Order: {
                type: 'object',
                properties: {
                    order_id: { type: 'integer' },
                    order_type: { type: 'string' }
                }
            },
            Token: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    symbol: { type: 'string' },
                    createdAt: { type: 'string' },
                    updatedAt: { type: 'string' }
                }
            },
            Trade: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    maker: { type: 'integer' },
                    taker: { type: 'integer' },
                    pair: { type: 'string' },
                    amount: { type: 'number' },
                    price: { type: 'number' },
                    date: { type: 'string' }
                }
            },
            UserWallet: {
                type: 'object',
                required: [
                    'balance',
                    'public_key'
                ],
                properties: {
                    wallet_id: { type: 'integer' },
                    balance: {
                        type: 'number',
                        format: 'double',
                        default: 0
                    },
                    public_key: { type: 'string' }
                }
            }
        }
    }
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
