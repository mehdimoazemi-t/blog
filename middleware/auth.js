const jwt = require("jsonwebtoken");
const configs = require("../config");

const auth = (req, res, next) => {
    try {

        const authHeader = req.headers['authorization'];

        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {

            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const payload = jwt.verify(token, configs.auth.accessTokenSecretKey);

        req.user = payload;

        next();

    } catch (error) {
        
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Unauthorized: Token expired" });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = auth;
