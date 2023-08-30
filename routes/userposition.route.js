// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userposition.controller');
const router = express.Router();

router.get('/orders', userController.getUserOrders);
router.get('/positions', userController.getUserPositions);
router.get('/trade-history', userController.getUserTradeHistory);

module.exports = router;
