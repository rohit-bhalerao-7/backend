const { promisify } = require('util');
const redis = require('redis');
const client = redis.createClient();
const db = require('./models');  // Assuming Sequelize setup

const zaddAsync = promisify(client.zadd).bind(client);
const zrangeAsync = promisify(client.zrange).bind(client);
const zrevrangeAsync = promisify(client.zrevrange).bind(client);
const zremAsync = promisify(client.zrem).bind(client);

const MATCH_THRESHOLD = 0.001;

async function getBestSellOrder() {
    const sellOrders = await zrangeAsync('sellOrders', 0, 0, 'WITHSCORES');
    if (sellOrders.length === 0) return null;

    const orderId = sellOrders[0];
    const order = await db.Order.findByPk(orderId);  // Fetch from PostgreSQL for details

    return order;
}

async function getBestBuyOrder() {
    const buyOrders = await zrevrangeAsync('buyOrders', 0, 0, 'WITHSCORES');
    if (buyOrders.length === 0) return null;

    const orderId = buyOrders[0];
    const order = await db.Order.findByPk(orderId);  // Fetch from PostgreSQL for details

    return order;
}

async function executeTrade(buyOrder, sellOrder) {
    let tradeAmount = Math.min(buyOrder.amount, sellOrder.amount);

    // Assuming price determination is based on the first order that came in, this is just one approach
    let tradePrice = sellOrder.createdAt < buyOrder.createdAt ? sellOrder.price : buyOrder.price;

    // Update PostgreSQL with the executed trade
    await db.Trade.create({
        buyOrderId: buyOrder.id,
        sellOrderId: sellOrder.id,
        amount: tradeAmount,
        price: tradePrice
    });

    // Adjust order amounts
    buyOrder.amount -= tradeAmount;
    sellOrder.amount -= tradeAmount;

    // Update or remove the orders in Redis and PostgreSQL
    if (buyOrder.amount <= 0) {
        await zremAsync('buyOrders', buyOrder.id);
        await buyOrder.destroy();  // Remove from PostgreSQL
    } else {
        await buyOrder.save();  // Update remaining amount in PostgreSQL
    }

    if (sellOrder.amount <= 0) {
        await zremAsync('sellOrders', sellOrder.id);
        await sellOrder.destroy();  // Remove from PostgreSQL
    } else {
        await sellOrder.save();  // Update remaining amount in PostgreSQL
    }
}

async function addToOrderBook(order) {
    if (order.type === 'buy') {
        await zaddAsync('buyOrders', order.price, order.id);
    } else {
        await zaddAsync('sellOrders', order.price, order.id);
    }
}

async function matchOrder(order) {
    if (order.type === 'buy') {
        const bestSellOrder = await getBestSellOrder();
        while (bestSellOrder && order.price >= bestSellOrder.price - MATCH_THRESHOLD && order.amount > 0) {
            await executeTrade(order, bestSellOrder);
        }
    } else if (order.type === 'sell') {
        const bestBuyOrder = await getBestBuyOrder();
        while (bestBuyOrder && order.price <= bestBuyOrder.price + MATCH_THRESHOLD && order.amount > 0) {
            await executeTrade(order, bestBuyOrder);
        }
    }

    // If the order still has an amount left, add it to the order book
    if (order.amount > 0) {
        await addToOrderBook(order);
    }
    await db.MatchedOrder.create({ ...buyOrder.dataValues, ...sellOrder.dataValues });
}
