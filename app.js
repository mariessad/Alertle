require("dotenv").config();
const express = require("express");
const app = express();

const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const methodOverride = require("method-override");
const indexRoutes = require("./routes/index-routes");

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs"); //this configures the app to set EJS to be the template language
app.use(morgan("dev"));
app.use(methodOverride("_method")); //middlewear for bringing in method override. Needs key name to know what to override
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //didn't see this in homework 12 part one but see it in 3.2 slides
// body-parser for cloudinary
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public"))); // this configures the app to know that the public directory is available

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRoutes);

// Multer Cloudinary image storage

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "demo",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }],
// });
// const parser = multer({ storage: storage });

// app.post("/api/images", parser.single("image"), (req, res) => {
//   console.log(req.file); // to see what is returned to you
//   const image = {};
//   image.url = req.file.url;
//   image.id = req.file.public_id;
//   Image.create(image) // save image information in database
//     .then((newImage) => res.json(newImage))
//     .catch((err) => console.log(err));
// });

require("./config/connection");

//Server
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
