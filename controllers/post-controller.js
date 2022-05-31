const User = require("../models/userModel");
const Image = require("../models/imageModel");
const passport = require("passport");
const { response } = require("express");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

module.exports = {
  post_image_get: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/post", {
        //pass data needed
      });
    } else {
      response.redirect("/login-signup");
    }
  },
};
