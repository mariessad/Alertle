const data = require(""); // add the database

module.exports = {
  index: (request, response) => {
    response.render("pages/index", {
      data: data,
    });
  },
};
