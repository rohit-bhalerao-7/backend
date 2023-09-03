// controllers/tradingPairController.js
const TradingPair = require('../models/tradingpair.model.js');

exports.getAllTradingPairs = async (req, res) => {
    try {
        const tradingPairs = await TradingPair.findAll();
        res.status(200).json(tradingPairs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch trading pairs.' });
    }
};

exports.getTradingPairDetails = async (req, res) => {
    try {
        const { symbol } = req.params;
        const tradingPair = await TradingPair.findByPk(symbol);
        if (!tradingPair) {
            return res.status(404).json({ error: 'Trading pair not found.' });
        }
        res.status(200).json(tradingPair);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch trading pair details.' });
    }
};
