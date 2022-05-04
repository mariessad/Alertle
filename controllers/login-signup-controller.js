//require data

module.exports = {
  loginSignupPage: (request, response) => {
    response.render("pages/login", {
      //pass data needed
    });
  },
  login: (request, response) => {
    //pass data, store in database, redirect to profile page
  },
  signup: (request, response) => {
    //pass data, store in database, redirect to profile page
  },
};
