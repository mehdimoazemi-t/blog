const express = require("express");
const controller = require("../controller/tags");


const router = express.Router()

router.route("/")
    .post(controller.add)
    .get(controller.getAll)


router.route("/:id")
    .get(controller.getTag)
    .delete(controller.deleteTag)

module.exports = router