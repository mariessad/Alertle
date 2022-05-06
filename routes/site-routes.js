const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site-controller");

//Routes

router.route("/").get(siteController.index);

module.exports = router;
