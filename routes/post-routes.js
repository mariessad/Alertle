const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post-controller");
const Image = require("../models/imageModel");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.route("/").get(postCtrl.post_image_get);

router.post(
  "/api/images",
  upload.single("image"),
  async (request, response) => {
    try {
      const result = await cloudinary.uploader.upload(request.file.path);

      //create instance of image
      let image = new Image({
        username: request.body.username,
        name: request.body.name,
        desc: result.secure_url,
        cloudinary_id: result.public_id,
        location: request.body.location,
        comment: request.body.comment,
      });
      //save image
      await image.save();
      response.redirect("/alerts");
    } catch (error) {}
  }
);

module.exports = router;
