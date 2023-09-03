const express = require('express');
const router = express.Router();
const UserWalletsController = require('../controllers/wallet.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     UserWallet:
 *       type: object
 *       required:
 *         - balance
 *         - public_key
 *       properties:
 *         wallet_id:
 *           type: integer
 *           description: The unique ID of the wallet.
 *         balance:
 *           type: number
 *           format: double
 *           description: The balance in the wallet.
 *           default: 0
 *         public_key:
 *           type: string
 *           description: The public key associated with the wallet.
 */

/**
 * @swagger
 * /wallets:
 *   get:
 *     tags:
 *       - Wallets
 *     summary: Retrieve all user wallets
 *     description: Fetches all user wallets from the database.
 *     responses:
 *       200:
 *         description: List of wallets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserWallet'
 *       500:
 *         description: Server error retrieving wallets.
 */

/**
 * @swagger
 * /wallets/{id}:
 *   get:
 *     tags:
 *       - Wallets
 *     summary: Retrieve a wallet by ID
 *     description: Fetch a specific wallet based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wallet to fetch.
 *         type: integer
 *     responses:
 *       200:
 *         description: Wallet details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserWallet'
 *       404:
 *         description: Wallet not found.
 *       500:
 *         description: Server error retrieving wallet.
 */

/**
 * @swagger
 * /wallets:
 *   post:
 *     tags:
 *       - Wallets
 *     summary: Create a new user wallet
 *     description: Adds a new user wallet to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserWallet'
 *     responses:
 *       201:
 *         description: Wallet created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserWallet'
 *       500:
 *         description: Server error creating wallet.
 */

/**
 * @swagger
 * /wallets/{id}:
 *   put:
 *     tags:
 *       - Wallets
 *     summary: Update a wallet by ID
 *     description: Modify details of a specific wallet based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wallet to modify.
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserWallet'
 *     responses:
 *       200:
 *         description: Wallet updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserWallet'
 *       404:
 *         description: Wallet not found.
 *       500:
 *         description: Server error updating wallet.
 */

/**
 * @swagger
 * /wallets/{id}:
 *   delete:
 *     tags:
 *       - Wallets
 *     summary: Delete a wallet by ID
 *     description: Removes a specific wallet from the database based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the wallet to delete.
 *         type: integer
 *     responses:
 *       204:
 *         description: Wallet deleted successfully.
 *       404:
 *         description: Wallet not found.
 *       500:
 *         description: Server error deleting wallet.
 */


router.get('/', UserWalletsController.getAllWallets);
router.get('/:id', UserWalletsController.getWalletById);
router.post('/', UserWalletsController.createUserWallet);
router.put('/:id', UserWalletsController.updateWalletById);
router.delete('/:id', UserWalletsController.deleteWalletById);

module.exports = router;
