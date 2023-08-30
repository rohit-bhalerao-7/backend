const { Token } = require('../models');

const TokensController = {
    getAllTokens: async (req, res) => {
        try {
            const tokens = await Token.findAll();
            res.status(200).json(tokens);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tokens', error });
        }
    },

    getTokenById: async (req, res) => {
        try {
            const token = await Token.findByPk(req.params.id);
            if (!token) return res.status(404).json({ message: 'Token not found' });
            res.status(200).json(token);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving token', error });
        }
    },

    createToken: async (req, res) => {
        try {
            const token = await Token.create(req.body);
            res.status(201).json(token);
        } catch (error) {
            res.status(500).json({ message: 'Error creating token', error });
        }
    },

    updateTokenById: async (req, res) => {
        try {
            const updated = await Token.update(req.body, {
                where: { token_id: req.params.id }
            });
            if (updated[0]) {
                const updatedToken = await Token.findByPk(req.params.id);
                res.status(200).json(updatedToken);
            } else {
                res.status(404).json({ message: 'Token not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating token', error });
        }
    },

    deleteTokenById: async (req, res) => {
        try {
            const deletion = await Token.destroy({
                where: { token_id: req.params.id }
            });
            if (deletion) res.status(204).send();
            else res.status(404).json({ message: 'Token not found' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting token', error });
        }
    }
};

module.exports = TokensController;
