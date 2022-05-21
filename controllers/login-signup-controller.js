const User = require("../models/userModel");
const passport = require("passport");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

module.exports = {
  loginSignupPage: (request, response) => {
    response.render("pages/login", {
      //pass data needed
    });
  },
  register_post: (request, response) => {
    const { username, password } = request.body;
    User.register({ username: username }, password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect("/login-signup");
      } else {
        passport.authenticate("local")(request, response, () => {
          response.redirect("/post");
        });
      }
    });
  },
  login_post: (request, response) => {
    const { username, password } = request.body;
    const user = new User({
      username: username,
      password: password,
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error);
        response.redirect("/login");
      } else {
        passport.authenticate("local")(request, response, () => {
          response.redirect("/post");
        });
      }
    });
  },
  logout: (request, response) => {
    request.logout();
    response.redirect("/");
  },
  google_get: passport.authenticate("google", {
    scope: ["openid", "profile", "email"],
  }),
  google_redirect_get: [
    passport.authenticate("google", { failureRedirect: "/login-signup" }),
    function (request, response) {
      response.redirect("/post");
    },
  ],
};
