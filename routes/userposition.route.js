// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userposition.controller');
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     UserOrder:
 *       type: object
 *       properties:
 *         ... 
 *         (This would include all the fields that are present in your 'Order' model. 
 *         I am not able to specify them as you didn't provide the 'order.model' details)
 *         
 *     UserPosition:
 *       type: object
 *       required:
 *         - market
 *         - side
 *       properties:
 *         market:
 *           type: string
 *           description: The market the position is associated with.
 *         quantity:
 *           type: number
 *           format: float
 *           description: Quantity in the position.
 *         value:
 *           type: number
 *           format: float
 *           description: Value of the position.
 *         side:
 *           type: string
 *           enum: [buy, sell]
 *           description: Side of the position (buy or sell).
 *         unrealisedPL:
 *           type: number
 *           format: float
 *           description: Unrealised Profit/Loss.
 *         realisedPL:
 *           type: number
 *           format: float
 *           description: Realised Profit/Loss.
 *           
 *     UserTrade:
 *       type: object
 *       properties:
 *         ...
 *         (This would include all the fields that are present in your 'Trade' model. 
 *         You haven't provided the detailed attributes of this model either)
 */

/**
 * @swagger
 * /user/orders:
 *   get:
 *     tags:
 *       - UserPosition
 *     summary: Retrieve all orders of the authenticated user
 *     description: Fetches all orders associated with the authenticated user.
 *     responses:
 *       200:
 *         description: List of all user orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserOrder'
 *       500:
 *         description: Error retrieving user orders.
 */

/**
 * @swagger
 * /user/positions:
 *   get:
 *     tags:
 *       - UserPosition
 *     summary: Retrieve all positions of the authenticated user
 *     description: Fetches all positions associated with the authenticated user.
 *     responses:
 *       200:
 *         description: List of all user positions.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserPosition'
 *       500:
 *         description: Error retrieving user positions.
 */

/**
 * @swagger
 * /user/trade-history:
 *   get:
 *     tags:
 *       - UserPosition
 *     summary: Retrieve trade history of the authenticated user
 *     description: Fetches all trades associated with the authenticated user.
 *     responses:
 *       200:
 *         description: Trade history of the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserTrade'
 *       500:
 *         description: Error retrieving user trade history.
 */

router.get('/orders', userController.getUserOrders);
router.get('/positions', userController.getUserPositions);
router.get('/trade-history', userController.getUserTradeHistory);

module.exports = router;
