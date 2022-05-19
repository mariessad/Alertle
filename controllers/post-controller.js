const User = require("../models/userModel");
const passport = require("passport");

module.exports = {
  post_get: (request, response) => {
    response.render("pages/post", {
      //pass data needed
    });
  },
};
