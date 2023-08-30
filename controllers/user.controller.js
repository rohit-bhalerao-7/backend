const { User } = require('../models/index');

const UsersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users', error });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user', error });
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            console.log(user.dataValues);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    },

    updateUserById: async (req, res) => {
        try {
            const updated = await User.update(req.body, {
                where: { user_id: req.params.id }
            });
            if (updated) {
                const updatedUser = await User.findByPk(req.params.id);
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const deletion = await User.destroy({
                where: { user_id: req.params.id }
            });
            if (deletion) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }
};

module.exports = UsersController;
