const express = require('express');
const router = express.Router();
const UserWalletsController = require('../controllers/wallet.controller');


/**
 * @swagger
 * tags:
 *   name: Wallets
 *   description: Wallet management for users
 * 
 * definitions:
 *   UserWallet:
 *     type: object
 *     required:
 *       - wallet_id
 *     properties:
 *       wallet_id:
 *         type: string
 *       ... [other properties of the UserWallet model]
 *
 * /wallets:
 *   get:
 *     tags: [Wallets]
 *     summary: Retrieve all user wallets
 *     description: Fetches all user wallets from the database.
 *     responses:
 *       200:
 *         description: List of wallets
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/UserWallet'
 *       500:
 *         description: Server error retrieving wallets
 */

/**
 * /wallets/{id}:
 *   get:
 *     tags: [Wallets]
 *     summary: Retrieve a wallet by ID
 *     description: Fetch a specific wallet based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wallet to fetch.
 *         type: string
 *     responses:
 *       200:
 *         description: Wallet details
 *         schema:
 *           $ref: '#/definitions/UserWallet'
 *       404:
 *         description: Wallet not found
 *       500:
 *         description: Server error retrieving wallet
 */


/**
 * /wallets:
 *   post:
 *     tags: [Wallets]
 *     summary: Create a new user wallet
 *     description: Adds a new user wallet to the database.
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Wallet object to add.
 *         schema:
 *           $ref: '#/definitions/UserWallet'
 *     responses:
 *       201:
 *         description: Wallet created
 *         schema:
 *           $ref: '#/definitions/UserWallet'
 *       500:
 *         description: Server error creating wallet
 */


/**
 * /wallets/{id}:
 *   put:
 *     tags: [Wallets]
 *     summary: Update a wallet by ID
 *     description: Modify details of a specific wallet based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wallet to modify.
 *         type: string
 *       - in: body
 *         name: body
 *         required: true
 *         description: Updated wallet object.
 *         schema:
 *           $ref: '#/definitions/UserWallet'
 *     responses:
 *       200:
 *         description: Wallet updated
 *         schema:
 *           $ref: '#/definitions/UserWallet'
 *       404:
 *         description: Wallet not found
 *       500:
 *         description: Server error updating wallet
 */


/**
 * /wallets/{id}:
 *   delete:
 *     tags: [Wallets]
 *     summary: Delete a wallet by ID
 *     description: Removes a specific wallet from the database based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wallet to delete.
 *         type: string
 *     responses:
 *       204:
 *         description: Wallet deleted successfully
 *       404:
 *         description: Wallet not found
 *       500:
 *         description: Server error deleting wallet
 */


router.get('/', UserWalletsController.getAllWallets);
router.get('/:id', UserWalletsController.getWalletById);
router.post('/', UserWalletsController.createUserWallet);
router.put('/:id', UserWalletsController.updateWalletById);
router.delete('/:id', UserWalletsController.deleteWalletById);

module.exports = router;
