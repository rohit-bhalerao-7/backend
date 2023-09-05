function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // or specific domains
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');

    next();
}

module.exports = {
    allowCrossDomain
};
