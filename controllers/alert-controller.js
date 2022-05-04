//Require data needed - data to populate the images on this page
//require the model for this page if needed

module.exports = {
  alerts: (request, response) => {
    response.render("pages/alerts", {
      //add data for image posts in here
    });
  },
};
