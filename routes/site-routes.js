const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site-controller");

//Routes

router.route("/").get(siteController.index);

// router.route("/register").post(siteController.register_post);

// router
//   .route("/login")
//   .get(siteController.login_get)
//   .post(siteController.login_post);

// router.route("/logout").get(siteController.logout);

// router.route("/auth/google").get(siteController.google_get);

// router.route("/auth/google/alerts").get(siteController.google_redirect_get);

module.exports = router;
