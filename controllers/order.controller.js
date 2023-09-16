const { Order } = require('../models');
const redis = require('../config/db.redis.config');

const OrdersController = {
    getAllOrders: async (req, res) => {
        try {
            // Fetch sell orders and buy orders from Redis.
            // Assuming you're using the ZRANGE command to get the entire sorted set.
            const sellOrders = await redis.zrange('sellOrders', 0, -1, 'WITHSCORES');
            const buyOrders = await redis.zrange('buyOrders', 0, -1, 'WITHSCORES');
    
            // Optionally, you can format the data to be more user-friendly.
            const formattedSellOrders = [];
            const formattedBuyOrders = [];
    
            for (let i = 0; i < sellOrders.length; i += 2) {
                formattedSellOrders.push({ orderId: sellOrders[i], price: sellOrders[i + 1] });
            }
    
            for (let i = 0; i < buyOrders.length; i += 2) {
                formattedBuyOrders.push({ orderId: buyOrders[i], price: buyOrders[i + 1] });
            }
    
            res.json({
                sellOrders: formattedSellOrders,
                buyOrders: formattedBuyOrders
            });
    
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order book from Redis', error });
        }
    },

    getOrderById: async (req, res) => {
        try {
            const order = await Order.findByPk(req.params.id);
            if (!order) return res.status(404).json({ message: 'Order not found' });
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error });
        }
    },

    createOrder: async (req, res) => {
        try {
            const order = await Order.create(req.body);
            // Add order to Redis
            if (req.body.order_type === 'sell')
                await redis.zadd('sellOrders', order.dataValues.price, `${order.dataValues.order_id}:${order.dataValues.trading_pair}`);
            else
                await redis.zadd('buyOrders', order.dataValues.price, `${order.dataValues.order_id}:${order.dataValues.trading_pair}`);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error });
        }
        matchOrder(order);
    },

    updateOrderById: async (req, res) => {
        try {
            const updated = await Order.update(req.body, {
                where: { order_id: req.params.id }
            });
            if (updated[0]) {
                const updatedOrder = await Order.findByPk(req.params.id);
                res.status(200).json(updatedOrder);
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating order', error });
        }
    },

    deleteOrderById: async (req, res) => {
        try {
            const orderExists = await Order.findOne({
                where: { order_id: req.params.id }
            });
            const deletion = await Order.destroy({
                where:{
                    order_id:req.body.id
                }
            })
            if (deletion) {
                // Remove an order (for example, when it's fulfilled)
                if(orderExists &&orderExists.dataValues.order_type==='sell')
                    await redis.zrem('sellOrders', orderExists.dataValues.order_id);
                else 
                    await redis.zrem('buyOrders', orderExists.dataValues.order_id);
                res.status(204).send();
            }
            else res.status(404).json({ message: 'Order not found' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting order', error });
        }
    }
};

module.exports = OrdersController;
