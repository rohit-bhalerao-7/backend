// routes/tradingPairRoutes.js
const express = require('express');
const tradingPairController = require('../controllers/tradingPairController');
const router = express.Router();

router.get('/', tradingPairController.getAllTradingPairs);
router.get('/:symbol', tradingPairController.getTradingPairDetails);

module.exports = router;
