const express = require('express');
const router = express.Router();
const TradesController = require('../controllers/trade.controller');

/**
 * @swagger
 * /trades:
 *   get:
 *     summary: Retrieve a list of trades
 *     responses:
 *       200:
 *         description: A list of trades.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Trade'
 * 
 * components:
 *   schemas:
 *     Trade:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         maker:
 *           type: integer
 *         taker:
 *           type: integer
 *         pair:
 *           type: string
 *         amount:
 *           type: number
 *         price:
 *           type: number
 *         date:
 *           type: string
 */
/**
 * @swagger
 * /trades:
 *   get:
 *     tags:
 *       - Trades
 *     description: Retrieves all trades.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of trade objects.
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Trade'
 *       500:
 *         description: Error retrieving trades.
 */


/**
 * @swagger
 * /trades/{id}:
 *   get:
 *     tags:
 *       - Trades
 *     description: Retrieves a specific trade by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Trade's ID.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A trade object.
 *         schema:
 *           $ref: '#/definitions/Trade'
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
 *     description: Creates a new trade.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: trade
 *         description: Trade object.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Trade'
 *     responses:
 *       201:
 *         description: Successfully created trade.
 *       500:
 *         description: Error creating trade.
 */


/**
 * @swagger
 * /trades/{id}:
 *   put:
 *     tags:
 *       - Trades
 *     description: Updates a specific trade by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Trade's ID.
 *         in: path
 *         required: true
 *         type: string
 *       - name: trade
 *         description: Trade object with updated values.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Trade'
 *     responses:
 *       200:
 *         description: Successfully updated trade.
 *       404:
 *         description: Trade not found.
 *       500:
 *         description: Error updating trade.
 */


/**
 * @swagger
 * /trades/{id}:
 *   delete:
 *     tags:
 *       - Trades
 *     description: Deletes a specific trade by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Trade's ID.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Successfully deleted trade.
 *       404:
 *         description: Trade not found.
 *       500:
 *         description: Error deleting trade.
 */



router.get('/', TradesController.getAllTrades);
router.get('/:id', TradesController.getTradeById);
router.post('/', TradesController.createTrade);
router.put('/:id', TradesController.updateTradeById);
router.delete('/:id', TradesController.deleteTradeById);

module.exports = router;
