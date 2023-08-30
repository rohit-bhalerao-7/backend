const { UserWallet } = require('../models');

const UserWalletsController = {
    getAllWallets: async (req, res) => {
        try {
            const wallets = await UserWallet.findAll();
            res.status(200).json(wallets);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving wallets', error });
        }
    },

    getWalletById: async (req, res) => {
        try {
            const wallet = await UserWallet.findByPk(req.params.id);
            if (!wallet) return res.status(404).json({ message: 'Wallet not found' });
            res.status(200).json(wallet);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving wallet', error });
        }
    },

    createUserWallet: async (req, res) => {
        try {
            const wallet = await UserWallet.create(req.body);
            res.status(201).json(wallet);
        } catch (error) {
            res.status(500).json({ message: 'Error creating wallet', error });
        }
    },

    updateWalletById: async (req, res) => {
        try {
            const updated = await UserWallet.update(req.body, {
                where: { wallet_id: req.params.id }
            });
            if (updated[0]) {
                const updatedWallet = await UserWallet.findByPk(req.params.id);
                res.status(200).json(updatedWallet);
            } else {
                res.status(404).json({ message: 'Wallet not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating wallet', error });
        }
    },

    deleteWalletById: async (req, res) => {
        try {
            const deletion = await UserWallet.destroy({
                where: { wallet_id: req.params.id }
            });
            if (deletion) res.status(204).send();
            else res.status(404).json({ message: 'Wallet not found' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting wallet', error });
        }
    }
};

module.exports = UserWalletsController;
