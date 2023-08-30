const { Trade } = require('../models');

const TradesController = {
    getAllTrades: async (req, res) => {
        try {
            const trades = await Trade.findAll();
            res.status(200).json(trades);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving trades', error });
        }
    },

    getTradeById: async (req, res) => {
        try {
            const trade = await Trade.findByPk(req.params.id);
            if (!trade) return res.status(404).json({ message: 'Trade not found' });
            res.status(200).json(trade);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving trade', error });
        }
    },

    createTrade: async (req, res) => {
        try {
            const trade = await Trade.create(req.body);
            res.status(201).json(trade);
        } catch (error) {
            res.status(500).json({ message: 'Error creating trade', error });
        }
    },

    updateTradeById: async (req, res) => {
        try {
            const updated = await Trade.update(req.body, {
                where: { trade_id: req.params.id }
            });
            if (updated[0]) {
                const updatedTrade = await Trade.findByPk(req.params.id);
                res.status(200).json(updatedTrade);
            } else {
                res.status(404).json({ message: 'Trade not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating trade', error });
        }
    },

    deleteTradeById: async (req, res) => {
        try {
            const deletion = await Trade.destroy({
                where: { trade_id: req.params.id }
            });
            if (deletion) res.status(204).send();
            else res.status(404).json({ message: 'Trade not found' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting trade', error });
        }
    }
};

module.exports = TradesController;
