const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Alertle", // change to: process.env.DB_URL
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Successful connection with MongoDB Server");
    } else {
      console.log("Error with MongoDB's connectivity");
    }
  }
);
