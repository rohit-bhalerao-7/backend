const express = require('express');
const http = require('http'); 
const socketIo = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const {sequelize } = require('./config/db.config');
const userRoutes= require('./routes/user.route');
const orderRoutes = require('./routes/order.route');
const tradeRoutes = require('./routes/trade.route');
const tokenRoutes = require('./routes/token.route');
const walletRoutes = require('./routes/wallet.route');
const swaggerSpec = require('./swagger');


const app = express();
const PORT = 3000;


const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


// Parse request bodies as JSON
app.use(bodyParser.json());

app.use('/users',userRoutes);
app.use('/trades',tradeRoutes);

app.use('/tokens',tokenRoutes);
app.use('/wallets',walletRoutes);

app.use('/orders',orderRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// Start the server
app.listen(PORT, () => {
    console.log('Server started on port 3000');
  });

(async () => {
    try {
      await sequelize.sync({alter:true});
      console.log('Connection has been established successfully.');
  
      // // Synchronize the models with the database
      // await sequelize.sync({alter:true});
      // console.log('Models synchronized successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  })()
