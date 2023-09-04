const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/order.controller');

/**
 * @swagger
 * /orders:
 *   get:
 *     tags:
 *       - Orders
 *     summary: Retrieve all orders from the order book
 *     description: Fetches all buy and sell orders from the order book.
 *     responses:
 *       200:
 *         description: List of buy and sell orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sellOrders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       orderId:
 *                         type: integer
 *                       price:
 *                         type: number
 *                 buyOrders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       orderId:
 *                         type: integer
 *                       price:
 *                         type: number
 *       500:
 *         description: Error retrieving order book from Redis.
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     tags:
 *       - Orders
 *     summary: Retrieve a specific order by its ID
 *     parameters:
 *       - name: id
 *         description: Order's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the specified order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found.
 *       500:
 *         description: Error retrieving order.
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     tags:
 *       - Orders
 *     summary: Create a new order
 *     description: Adds a new order to the order book.
 *     requestBody:
 *       description: Order object that needs to be added.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Error creating order.
 */

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     tags:
 *       - Orders
 *     summary: Update an existing order by its ID
 *     parameters:
 *       - name: id
 *         description: Order's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated order object.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found.
 *       500:
 *         description: Error updating order.
 */

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     tags:
 *       - Orders
 *     summary: Delete an order by its ID
 *     parameters:
 *       - name: id
 *         description: Order's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Order successfully deleted.
 *       404:
 *         description: Order not found.
 *       500:
 *         description: Error deleting order.
 */
router.get('/', OrdersController.getAllOrders);
router.get('/:id', OrdersController.getOrderById);
router.post('/', OrdersController.createOrder);
router.put('/:id', OrdersController.updateOrderById);
router.delete('/:id', OrdersController.deleteOrderById);

module.exports = router;
