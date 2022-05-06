const express = require("express");
const router = express.Router();
const alertCtrl = require("../controllers/alert-controller");

//ALERT ROUTES
router.route("/").get(alertCtrl.alerts);
//.post(alertCtrl.alert_post)

//router.route()

module.exports = router;
