//Require data needed - data to populate the images on this page
const Image = require("../models/imageModel");

module.exports = {
  alerts: (request, response) => {
    Image.find({}, (err, items) => {
      if (err) {
        console.log(err);
        response.status(500).send("An error occurred", err);
      } else {
        response.render("pages/alerts", {
          items: items,
        });
      }
    });
  },
};
