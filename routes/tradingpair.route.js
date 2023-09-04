// routes/tradingPairRoutes.js
const express = require('express');
const tradingPairController = require('../controllers/tradingpair.controller.js');
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     TradingPair:
 *       type: object
 *       required:
 *         - symbol
 *       properties:
 *         symbol:
 *           type: string
 *           description: The trading pair symbol.
 *         lastMarketPrice:
 *           type: number
 *           format: float
 *           description: The last market price of the trading pair.
 *         change24h:
 *           type: number
 *           format: float
 *           description: The 24-hour price change of the trading pair.
 *         volume:
 *           type: number
 *           format: float
 *           description: The volume of the trading pair.
 *         high24h:
 *           type: number
 *           format: float
 *           description: The highest price in the last 24 hours for the trading pair.
 *         low24h:
 *           type: number
 *           format: float
 *           description: The lowest price in the last 24 hours for the trading pair.
 *         marketVolume:
 *           type: number
 *           format: float
 *           description: The market volume of the trading pair.
 */

/**
 * @swagger
 * /tradingpairs:
 *   get:
 *     tags:
 *       - TradingPairs
 *     summary: Retrieve all available trading pairs
 *     description: Fetches all trading pairs available on the platform.
 *     responses:
 *       200:
 *         description: List of all trading pairs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TradingPair'
 *       500:
 *         description: Error retrieving trading pairs.
 */

/**
 * @swagger
 * /tradingpairs/{symbol}:
 *   get:
 *     tags:
 *       - TradingPairs
 *     summary: Retrieve details of a specific trading pair using its symbol
 *     parameters:
 *       - name: symbol
 *         description: Trading pair's unique symbol.
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of the specified trading pair.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TradingPair'
 *       404:
 *         description: Trading pair not found.
 *       500:
 *         description: Error retrieving trading pair details.
 */

router.get('/', tradingPairController.getAllTradingPairs);
router.get('/:symbol', tradingPairController.getTradingPairDetails);

module.exports = router;
