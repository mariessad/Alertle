//require data
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  loginSignupPage: (request, response) => {
    response.render("pages/login", {
      //pass data needed
    });
  },
  login_post: (request, response) => {
    const { username, password } = request.body;
    console.log(`password entered is: ${password}`);
    User.findOne({ username: username }, (error, foundUser) => {
      if (error) {
        console.log(`The error at login is: ${error}`);
      } else {
        if (foundUser) {
          console.log(`username was matched: ${foundUser.username}`);
          console.log(`their password is: ${foundUser.password}`);
          bcrypt.compare(
            request.body.password,
            foundUser.password,
            function (err, result) {
              // result == true
              if (foundUser.password === password) {
                console.log(`user ${foundUser.username} logged in`); //add a false option for when the password doesnt match
                response.redirect("/alerts");
              }
            }
          );
        }
      }
    });
  },
  signup: (request, response) => {
    bcrypt.hash(request.body.password, saltRounds, function (err, hash) {
      //BCRYPT STUFFS
      // Store hash in your password DB.
      const { username, password } = request.body;
      const newUser = new User({
        username: username,
        password: hash,
      });
      newUser.save();
      response.redirect("/alerts");
    });
  },
};
