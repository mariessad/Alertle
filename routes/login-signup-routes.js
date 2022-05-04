const express = require("express");
const router = express.Router();
const loginCtrl = require("../controllers/login-signup-controller");

//LOGIN-SIGNUP ROUTES

router.route("/login-signup").get(loginCtrl.loginSignupPage);
//what type of routes for login + signup
