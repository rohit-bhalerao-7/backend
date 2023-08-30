
const {User} = require('./user.model');
const {Token} = require('./token.model.js');
const {UserWallet} = require('./wallet.model.js');
const {Order} = require('./order.model.js');
const {Trade} = require('./trade.model.js');

User.hasMany(UserWallet, { foreignKey: 'user_id' });
UserWallet.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Token.hasMany(UserWallet, { foreignKey: 'token_id' });
UserWallet.belongsTo(Token, { foreignKey: 'token_id' });

Token.hasMany(Order, { foreignKey: 'token_id' });
Order.belongsTo(Token, { foreignKey: 'token_id' });

Order.belongsToMany(Order, { through: Trade, as: 'BuyOrders', foreignKey: 'buy_order_id' });
Order.belongsToMany(Order, { through: Trade, as: 'SellOrders', foreignKey: 'sell_order_id' });

module.exports = {
    User,
    Token,
    UserWallet,
    Order,
    Trade
};
