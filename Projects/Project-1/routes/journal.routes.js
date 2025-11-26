const express = require("express");
const app = express();
const router = express.Router();

//model
const Jmodel = require("../models/journal.model.js");

router.get("/", async (req, res) => {
  console.log(req.user);
  res.cookie("color", "red");
  console.log(req.headers.cookie);
  res.render("index.ejs");
});

router.get("/journal", async (req, res) => {
  res.render("journal.ejs");
});

router.post("/journal", (req, res) => {
  const { journal } = req.body;
  console.log(journal);
  try {
    Jmodel.insertOne({
      name: "Zuck", //later we will get it from req.username;(Oauth)
      age: 20,
      data: journal,
    }).then(() => {
      console.log("journal saved");
    });
  } catch (error) {
    res.setHeader("name", "onkar");
    res.send().json("error occured");
  }
  console.log("yes working");
});

module.exports = router;
