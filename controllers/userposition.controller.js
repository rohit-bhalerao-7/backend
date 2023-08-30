// controllers/userController.js
const Order = require('../models/order.model');  
const UserPosition = require('../models/userposition.model');
const Trade = require('../models/trade.model');  

exports.getUserOrders = async (req, res) => {
    try {
        const userId = req.userId;  // Assuming you've authenticated and attached userId to the request
        const orders = await Order.findAll({ where: { userId: userId } });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user orders.' });
    }
};

exports.getUserPositions = async (req, res) => {
    try {
        const userId = req.userId;
        const positions = await UserPosition.findAll({ where: { userId: userId } });
        res.status(200).json(positions);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user positions.' });
    }
};

exports.getUserTradeHistory = async (req, res) => {
    try {
        const userId = req.userId;
        const tradeHistory = await Trade.findAll({ where: { userId: userId } });
        res.status(200).json(tradeHistory);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user trade history.' });
    }
};
