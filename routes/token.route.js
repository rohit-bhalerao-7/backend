const express = require('express');
const router = express.Router();
const TokensController = require('../controllers/token.controller');
/**
 * @swagger
 * /tokens:
 *   get:
 *     tags:
 *       - Tokens
 *     summary: Retrieve all available tokens
 *     description: Fetches all tokens present in the system.
 *     responses:
 *       200:
 *         description: List of all tokens.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Token'
 *       500:
 *         description: Error retrieving tokens.
 */

/**
 * @swagger
 * /tokens/{id}:
 *   get:
 *     tags:
 *       - Tokens
 *     summary: Retrieve details of a specific token using its ID
 *     parameters:
 *       - name: id
 *         description: Token's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the specified token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       404:
 *         description: Token not found.
 *       500:
 *         description: Error retrieving token.
 */

/**
 * @swagger
 * /tokens:
 *   post:
 *     tags:
 *       - Tokens
 *     summary: Register a new token in the system
 *     description: Adds a new token to the list of available tokens.
 *     requestBody:
 *       description: Token object that needs to be added.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Token'
 *     responses:
 *       201:
 *         description: Token successfully registered.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       500:
 *         description: Error registering the token.
 */

/**
 * @swagger
 * /tokens/{id}:
 *   put:
 *     tags:
 *       - Tokens
 *     summary: Update details of a specific token using its ID
 *     parameters:
 *       - name: id
 *         description: Token's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated token object.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Token'
 *     responses:
 *       200:
 *         description: Token successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       404:
 *         description: Token not found.
 *       500:
 *         description: Error updating the token.
 */

/**
 * @swagger
 * /tokens/{id}:
 *   delete:
 *     tags:
 *       - Tokens
 *     summary: Remove a specific token using its ID
 *     parameters:
 *       - name: id
 *         description: Token's unique identifier.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Token successfully deleted.
 *       404:
 *         description: Token not found.
 *       500:
 *         description: Error deleting the token.
 */


router.get('/', TokensController.getAllTokens);
router.get('/:id', TokensController.getTokenById);
router.post('/', TokensController.createToken);
router.put('/:id', TokensController.updateTokenById);
router.delete('/:id', TokensController.deleteTokenById);

module.exports = router;
