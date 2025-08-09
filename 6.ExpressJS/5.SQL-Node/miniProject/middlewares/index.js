const express = require("express");
const app = express();
const methodOverride = require("method-override");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));

  app.set("view engine", "ejs");
};
