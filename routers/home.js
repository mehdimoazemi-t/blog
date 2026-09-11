const express = require("express");
const controller = require("../controller/home");
const authHome = require("../middleware/homeAuth");
const router = express.Router()

router.route("/")
    .get(authHome, controller.home)



router.route("/search")
    .post(controller.search)


module.exports = router

