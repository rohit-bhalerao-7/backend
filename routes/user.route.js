const express = require('express');
const router = express.Router();
const UsersController = require("../controllers/user.controller");


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 * 
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - user_id
 *     properties:
 *       user_id:
 *         type: string
 *       
 *
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve all users
 *     description: Fetches all users from the database.
 *     responses:
 *       200:
 *         description: List of users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 *       500:
 *         description: Server error
 */

/**
 * /users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve a user by ID
 *     description: Fetch a specific user based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to fetch.
 *         type: string
 *     responses:
 *       200:
 *         description: User details
 *         schema:
 *           $ref: '#/definitions/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */


/**
 * /users:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     description: Adds a new user to the database.
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: User object to add.
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: User created
 *         schema:
 *           $ref: '#/definitions/User'
 *       500:
 *         description: Server error
 */

/**
 * /users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update a user by ID
 *     description: Modify details of a specific user based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to modify.
 *         type: string
 *       - in: body
 *         name: body
 *         required: true
 *         description: Updated user object.
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: User updated
 *         schema:
 *           $ref: '#/definitions/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */


/**
 * /users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete a user by ID
 *     description: Removes a specific user from the database based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete.
 *         type: string
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
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
