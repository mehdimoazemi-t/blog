const jwt = require("jsonwebtoken");
const configs = require("../config");

const authHome = (req, res, next) => {
    try {

        const authHeader = req.headers['authorization'];

        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return next()
        }

        const payload = jwt.verify(token, configs.auth.accessTokenSecretKey);

        req.user = payload;

        next();

    } catch (error) {
        next(error)
    }
};

module.exports = authHome;
