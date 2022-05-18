// const User = require("../models/userModel");
// const passport = require("passport");
//data

module.exports = {
  index: (request, response) => {
    response.render("pages/index", {
      // data: data,
    });
  },
};
