const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/order.controller');

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve a list of orders
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   order_id:
 *                     type: integer
 *                   order_type:
 *                     type: string
 */
/**
 * @swagger
 * /order/{id}:
 *   get:
 *     tags:
 *       - Orders
 *     description: Retrieves a specific order by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Order's ID.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: An order object.
 *         schema:
 *           $ref: '#/definitions/Order'
 *       404:
 *         description: Order not found.
 *       500:
 *         description: Error retrieving order.
 */
/**
 * @swagger
 * /order:
 *   post:
 *     tags:
 *       - Orders
 *     description: Creates a new order.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: order
 *         description: Order object.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Order'
 *     responses:
 *       201:
 *         description: Successfully created order.
 *       500:
 *         description: Error creating order.
 */
/**
 * @swagger
 * /order/{id}:
 *   put:
 *     tags:
 *       - Orders
 *     description: Updates a specific order by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Order's ID.
 *         in: path
 *         required: true
 *         type: string
 *       - name: order
 *         description: Order object with updated values.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Order'
 *     responses:
 *       200:
 *         description: Successfully updated order.
 *       404:
 *         description: Order not found.
 *       500:
 *         description: Error updating order.
 */

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     tags:
 *       - Orders
 *     description: Deletes a specific order by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Order's ID.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Successfully deleted order.
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
