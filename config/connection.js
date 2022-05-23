const mongoose = require("mongoose");
const dotenv = require("dotenv");
//do i need to require dotenv here

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Successful connection with MongoDB Server");
    } else {
      console.log("Error with MongoDB's connectivity");
    }
  }
);
