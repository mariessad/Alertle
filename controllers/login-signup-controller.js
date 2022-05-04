//require data

module.exports = {
  loginSignupPage: (request, response) => {
    response.render("pages/login", {
      //pass data needed
    });
  },
  login: (request, response) => {
    //pass data, store in database, redirect to profile page
    //take in username and passwordf
  },
  signup: (request, response) => {
    //pass data, store in database, redirect to profile page
    //going to take in username, email, password
  },
};
