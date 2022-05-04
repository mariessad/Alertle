//require data that needs to be passed

module.exports = {
  contact: (request, response) => {
    response.render("pages/contact", {
      //pass data in here
    });
  },
};
