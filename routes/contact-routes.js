const express = require("express");
const router = express.Router();
const contactCtrl = require("../controllers/contact-controller");

//CONTACT ROUTES

router.route("/").get(contactCtrl.contact);

module.exports = router;
