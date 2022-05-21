const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post-controller");

router.route("/").get(postCtrl.post_image_get);

router.route("/api/images").post(postCtrl.post_image_post);

module.exports = router;
