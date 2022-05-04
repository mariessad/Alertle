const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site-controller");

//Routes

router.route("/").get(siteController.index);

router.route().get(); //decide what routes you need

router.route("/login").get(); //login/signup form, should re-direct to profile page?

module.exports = router;
