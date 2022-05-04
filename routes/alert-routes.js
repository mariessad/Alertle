const express = require("express");
const router = express.Router();
const alertCtrl = require("../controllers/alert-controller");

//ALERT ROUTES
router.route("/alerts").get(alertCtrl.alerts);
