// routes/tradingPairRoutes.js
const express = require('express');
const tradingPairController = require('../controllers/tradingpair.controller.js');
const router = express.Router();

router.get('/', tradingPairController.getAllTradingPairs);
router.get('/:symbol', tradingPairController.getTradingPairDetails);

module.exports = router;
