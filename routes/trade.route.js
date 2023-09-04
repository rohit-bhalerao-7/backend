const express = require('express');
const router = express.Router();
const TradesController = require('../controllers/trade.controller');

/**
 * @swagger
 * /trades:
 *   get:
 *     tags:
 *       - Trades
 *     summary: Retrieve all executed trades
 *     description: Fetches all trades executed on the platform.
 *     responses:
 *       200:
 *         description: List of all trades.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Trade'
 *       500:
 *         description: Error retrieving trades.
 */

/**
 * @swagger
 * /trades/{id}:
 *   get:
 *     tags:
 *       - Trades
 *     summary: Retrieve details of a specific trade using its ID
 *     parameters:
 *       - name: id
 *         description: Trade's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the specified trade.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trade'
 *       404:
 *         description: Trade not found.
 *       500:
 *         description: Error retrieving trade.
 */

/**
 * @swagger
 * /trades:
 *   post:
 *     tags:
 *       - Trades
 *     summary: Register a new trade execution
 *     description: Adds a new trade to the list of executed trades.
 *     requestBody:
 *       description: Trade object that needs to be added.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trade'
 *     responses:
 *       201:
 *         description: Trade successfully registered.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trade'
 *       500:
 *         description: Error registering the trade.
 */

/**
 * @swagger
 * /trades/{id}:
 *   put:
 *     tags:
 *       - Trades
 *     summary: Update details of a specific trade using its ID
 *     parameters:
 *       - name: id
 *         description: Trade's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated trade object.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trade'
 *     responses:
 *       200:
 *         description: Trade successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trade'
 *       404:
 *         description: Trade not found.
 *       500:
 *         description: Error updating the trade.
 */

/**
 * @swagger
 * /trades/{id}:
 *   delete:
 *     tags:
 *       - Trades
 *     summary: Remove a specific trade using its ID
 *     parameters:
 *       - name: id
 *         description: Trade's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Trade successfully deleted.
 *       404:
 *         description: Trade not found.
 *       500:
 *         description: Error deleting the trade.
 */




router.get('/', TradesController.getAllTrades);
router.get('/:id', TradesController.getTradeById);
router.post('/', TradesController.createTrade);
router.put('/:id', TradesController.updateTradeById);
router.delete('/:id', TradesController.deleteTradeById);

module.exports = router;
