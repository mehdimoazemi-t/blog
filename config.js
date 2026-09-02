require("dotenv").config()

module.exports = {
    db: {
        dbUri: process.env.DB_URI,
        dbConnectionSize: process.env.DB_Connection_size,
    },

    port: process.env.PORT || 4000,


    auth: {
        accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
        refreshTokenSecretKey: process.env.REFRESH_TOKEN_SECRET_KEY,
        accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRE,
        refreshTokenExpire : process.env.refreshTokenExpire,
    }

}