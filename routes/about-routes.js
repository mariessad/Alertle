const express = require("express");
const router = express.Router();
const aboutCtrl = require("../controllers/about-controller");

//ABOUT ROUTES

router.route("/").get(aboutCtrl.about);

router.route("/animal-quiz").get(aboutCtrl.animal_quiz);

module.exports = router;
