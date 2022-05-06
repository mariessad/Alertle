const express = require("express");
const router = express.Router();
const aboutCtrl = require("../controllers/about-controller");

//ABOUT ROUTES

router.route("/").get(aboutCtrl.about);

module.exports = router;
