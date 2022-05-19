const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post-controller");

router.route("/").get(postCtrl.post_get);

module.exports = router;
