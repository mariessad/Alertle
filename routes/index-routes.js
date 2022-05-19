const express = require("express");
const siteRouter = require("./site-routes");
const alertsRouter = require("./alert-routes");
const aboutRouter = require("./about-routes");
const resourcesRouter = require("./resources-routes");
const contactRouter = require("./contact-routes");
const loginRouter = require("./login-signup-routes");
const postRouter = require("./post-routes");

const router = express.Router();

router.use("/", siteRouter);
router.use("/alerts", alertsRouter);
router.use("/about", aboutRouter);
router.use("/resources", resourcesRouter);
router.use("/contact", contactRouter);
router.use("/login-signup", loginRouter);
router.use("/post", postRouter);

module.exports = router;
