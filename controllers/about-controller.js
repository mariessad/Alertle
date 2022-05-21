// add data required here. Does this about page need any data?

module.exports = {
  about: (request, response) => {
    response.render("pages/about");
  },
  animal_quiz: (request, response) => {
    response.render("pages/animal-quiz");
  },
};
