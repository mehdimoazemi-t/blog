const express = require("express");
const controller = require("../controller/articles");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/roleAuth");
const imgUploader = require("../middleware/imgUploader");
const path = require("path");


const uploader = imgUploader(path.join(__dirname, "..", "public", "images", "cover"));

const router = express.Router()

router.route("/")
    .get(controller.getAll)
    .post(auth, uploader.single("cover"), controller.add)

router.route("/remove/:id")
    .delete(auth, controller.delete)

router.route("/:slug")
    .get(controller.getBySlug)

router.route("/tags/:tagName")
    .get(controller.findTagArticle)

module.exports = router