const express = require("express");
const app = express();
const coookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const router = require("../routes/tasks.routes.js");
const session = require("express-session");

var sessionOptions = {
  secret: "code",
  resave: true,
  saveUninitialized: true,
};

module.exports = (app) => {
  app.use(express.json());
  app.use(session(sessionOptions));
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));
  app.set("view engine", "ejs");
  app.use(coookieParser("secretCode"));
  app.use("/", router);
  app.use("/", (req, res, next) => {
    var { key } = req.query;
    if (key == "onkar") {
      next();
    } else {
      res.status(401).json("nikal bhosadike");
    }
  });
};
