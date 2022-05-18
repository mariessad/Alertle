const express = require("express");
const router = express.Router();
const loginCtrl = require("../controllers/login-signup-controller");

//LOGIN-SIGNUP ROUTES

router.route("/").get(loginCtrl.loginSignupPage).post(loginCtrl.login_post);

//what type of routes for login + signup
router.route("/signup").post(loginCtrl.register_post);

router.route("/logout").get(loginCtrl.logout);

router.route("/auth/google").get(loginCtrl.google_get);

router.route("/auth/google/alerts").get(loginCtrl.google_redirect_get);

module.exports = router;
