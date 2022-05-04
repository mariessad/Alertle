const express = require("express");
const router = express.Router();
const contactCtrl = require("../controllers/contact-controller");

//CONTACT ROUTES

router.route("/contact").get(contactCtrl.contact);
