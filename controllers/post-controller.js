const User = require("../models/userModel");
const passport = require("passport");
const { response } = require("express");
const parser = require("multer");
const cloudinary = require("cloudinary");
const Image = require("../models/imageModel");

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
  post_image_post: (request, response) => {
    const data = {
      image: request.body.image,
    };

    // upload image here
    cloudinary.uploader.upload(data.image);
    console.log(request.file); // to see what is returned to you
    const image = {};
    image.url = request.file.url;
    image.id = request.file.public_id;
    Image.create(image) // save image information in database
      .then((newImage) => response.json(newImage))
      .catch((err) => console.log(err));
  },
};
