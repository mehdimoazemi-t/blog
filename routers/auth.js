const express = require("express");
const controller = require("../controller/auth");
const registerValidateSchema = require("../validator/user.register");
const loginValidateSchema = require("../validator/user.login");
const validator = require("../middleware/yupValidator");


const router = express.Router()

router.route("/register").post(validator(registerValidateSchema), controller.register)
router.route("/login").post(validator(loginValidateSchema), controller.login)



module.exports = router