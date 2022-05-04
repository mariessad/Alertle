const express = require("express");
const router = express.Router();
const resourcesCtrl = require("../controllers/resources-controller");

//RESOURCE ROUTES

router.route("/").get(resourcesCtrl.resources);
