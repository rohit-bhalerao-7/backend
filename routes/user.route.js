const express = require('express');
const router = express.Router();
const UsersController = require("../controllers/user.controller");


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - encrypted_password
 *       properties:
 *         user_id:
 *           type: integer
 *           description: The unique ID of the user.
 *         username:
 *           type: string
 *           description: The username of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         encrypted_password:
 *           type: string
 *           description: The encrypted password of the user.
 *         2fa_enabled:
 *           type: boolean
 *           description: Two-factor authentication status of the user.
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The creation date and time of the user.
 *         last_login:
 *           type: string
 *           format: date-time
 *           description: The last login date and time of the user.
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve all users
 *     description: Fetches all users from the database.
 *     responses:
 *       200:
 *         description: List of all users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Error retrieving users.
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve details of a specific user by ID.
 *     parameters:
 *       - name: id
 *         description: User's unique ID.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the specified user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *       500:
 *         description: Error retrieving user details.
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user.
 *     description: Registers a new user in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User successfully created.
 *       500:
 *         description: Error creating user.
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update details of a specific user by ID.
 *     parameters:
 *       - name: id
 *         description: User's unique ID.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User successfully updated.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Error updating user.
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a specific user by ID.
 *     parameters:
 *       - name: id
 *         description: User's unique ID.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User successfully deleted.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Error deleting user.
 */



// Fetch all users
router.get('/', UsersController.getAllUsers);

// Fetch a single user by id
router.get('/:id', UsersController.getUserById);

// Create a new user
router.post('/register', UsersController.createUser);

// Update user details by id
router.put('/:id', UsersController.updateUserById);

// Delete a user by id
router.delete('/:id', UsersController.deleteUserById);

module.exports = router;
