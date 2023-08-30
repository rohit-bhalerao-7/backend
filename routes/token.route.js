const express = require('express');
const router = express.Router();
const TokensController = require('../controllers/token.controller');
/**
 * @swagger
 * /tokens:
 *   get:
 *     summary: Retrieve a list of tokens
 *     responses:
 *       200:
 *         description: A list of tokens.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Token'
 * 
 * components:
 *   schemas:
 *     Token:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         symbol:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 */

/**
 * @swagger
 * /token/{id}:
 *   get:
 *     tags:
 *       - Tokens
 *     description: Retrieves a specific token by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Token's ID.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A token object.
 *         schema:
 *           $ref: '#/definitions/Token'
 *       404:
 *         description: Token not found.
 *       500:
 *         description: Error retrieving token.
 */

/**
 * @swagger
 * /token:
 *   post:
 *     tags:
 *       - Tokens
 *     description: Creates a new token.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Token object.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Token'
 *     responses:
 *       201:
 *         description: Successfully created token.
 *       500:
 *         description: Error creating token.
 */

/**
 * @swagger
 * /token/{id}:
 *   put:
 *     tags:
 *       - Tokens
 *     description: Updates a specific token by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Token's ID.
 *         in: path
 *         required: true
 *         type: string
 *       - name: token
 *         description: Token object with updated values.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Token'
 *     responses:
 *       200:
 *         description: Successfully updated token.
 *       404:
 *         description: Token not found.
 *       500:
 *         description: Error updating token.
 */


/**
 * @swagger
 * /token/{id}:
 *   delete:
 *     tags:
 *       - Tokens
 *     description: Deletes a specific token by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Token's ID.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Successfully deleted token.
 *       404:
 *         description: Token not found.
 *       500:
 *         description: Error deleting token.
 */


router.get('/', TokensController.getAllTokens);
router.get('/:id', TokensController.getTokenById);
router.post('/', TokensController.createToken);
router.put('/:id', TokensController.updateTokenById);
router.delete('/:id', TokensController.deleteTokenById);

module.exports = router;
