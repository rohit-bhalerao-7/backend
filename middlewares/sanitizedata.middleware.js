const { body, validationResult } = require('express-validator');

function sanitizeData() {
    return [
        body('username').trim().escape(),
        body('email').isEmail().normalizeEmail(),
        // Add more fields as needed
    ];
}

function handleValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = {
    sanitizeData,
    handleValidationErrors
};
