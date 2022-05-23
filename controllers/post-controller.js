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
  //   post_image_post: async (request, response) => {
  //     upload.single("image");
  //     try {
  //       const result = await cloudinary.uploader.upload(request.file.path);

  //       //create instance of image
  //       let image = new Image({
  //         name: request.body.name,
  //         cloudinary_id: result.public_id,
  //       });
  //       //save image
  //       await Image.save();
  //       response.json(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  //   post_image_delete: (request, response) => {},
};
