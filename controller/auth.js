const User = require("../repository/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const configs = require("../config");

exports.register = async (req, res, next) => {

    try {
        const { name, username, email, password } = req.body

        const hashedPassword = bcrypt.hashSync(password, 10)

        const user = await User.create({ name, username, email, password: hashedPassword })

        const accessToken = jwt.sign({ id: user.id, role: user.role }, configs.auth.accessTokenSecretKey, {
            expiresIn: configs.auth.accessTokenExpire
        });


        const refreshToken = jwt.sign({ id: user.id, role: user.role }, configs.auth.refreshTokenSecretKey, {
            expiresIn: configs.auth.refreshTokenExpire
        });


        const hashedRefreshToken = bcrypt.hashSync(refreshToken, 10);

        return res.status(201).json({
            accessToken,
            refreshToken: hashedRefreshToken
        })
    } catch (error) {
        next(error)
    }

}


exports.login = async (req, res, next) => {
    try {

        const { username, password } = req.body

        const user = await User.findByUserName(username);

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        const isPasswordMatch = bcrypt.compareSync(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "invalid username or password"
            })
        }

        const accessToken = jwt.sign({ id: user.id, role: user.role }, configs.auth.accessTokenSecretKey, {
            expiresIn: configs.auth.accessTokenExpire
        });


        const refreshToken = jwt.sign({ id: user.id, role: user.role }, configs.auth.refreshTokenSecretKey, {
            expiresIn: configs.auth.refreshTokenExpire
        });


        const hashedRefreshToken = bcrypt.hashSync(refreshToken, 10);

        return res.status(201).json({
            accessToken,
            refreshToken
        })

    } catch (error) {
        next(error)
    }
}