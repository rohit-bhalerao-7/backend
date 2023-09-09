const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const { sequelize } = require("./config/db.config");
const allowCrossDomain = require("./middlewares/cors.middleware");
require("./models/index.js");
const userRoutes = require("./routes/user.route");
const orderRoutes = require("./routes/order.route");
const tradeRoutes = require("./routes/trade.route");
const tokenRoutes = require("./routes/token.route");
const walletRoutes = require("./routes/wallet.route");
const swaggerSpec = require("./swagger");
const tradingPairRoutes = require("./routes/tradingpair.route");
const verifyToken = require("./middlewares/verifytoken.middleware");
const {
  sanitizeData,
  handleValidationErrors,
} = require("./middlewares/sanitizedata.middleware");
const apiLimiter = require("./middlewares/ratelimit.middleware");
// const errorHandler = require("./middlewares/errorhandling.middleware");
const errorHandler = require('./middlewares/errorhandling.middleware');

const app = express();
const PORT = 3000;

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // For URL-encoded payloads
// app.use(allowCrossDomain);
// app.use(apiLimiter);
// app.post('*', sanitizeData(), handleValidationErrors);
// app.use(verifyToken);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For URL-encoded payloads
app.use(allowCrossDomain.allowCrossDomain); // Corrected usage
app.use(apiLimiter.apiLimiter); // Corrected usage
app.post("*", sanitizeData(), handleValidationErrors); // This is fine if you want to apply to all POST requests
app.use(verifyToken.verifyToken); // Corrected usage


// API Routes
app.use("/users", userRoutes);
app.use("/trades", tradeRoutes);
app.use("/tokens", tokenRoutes);
app.use("/wallets", walletRoutes);
app.use("/orders", orderRoutes);
app.use("/api/trading-pairs", tradingPairRoutes);

// Swagger UI Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Error handler should be the last middleware
app.use(errorHandler);

// Connect to the database and start the server
(async () => {
  try {
    //   await sequelize.sync({alter:true});

    // Synchronize the models with the database
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
    console.log("Models synchronized successfully.");

    // Start the server
    server.listen(PORT, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
