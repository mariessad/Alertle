//require data that needs to be passed
const Message = require("../models/messageModel");

module.exports = {
  contact: (request, response) => {
    response.render("pages/contact", {
      //pass data in here
    });
  },
  contact_form_post: (request, response) => {
    const { name, email, subject, message } = request.body;
    const userMessage = new Message({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    userMessage.save();
    response.redirect("/alerts");
  },
};
