const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { storage } = require("./config/cloudCofig.js");
const multer = require("multer");
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to EJS Templating",
    message: "Hello from EJS!",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    description: "This is a basic EJS templating setup",
  });
});

//  route to save an file at the upload/
app.post("/process", upload.single("avatar"), (req, res) => {
  res.send(req.file);
  console.log(req.file.path);
  // req.body will hold the text fields, if there were any
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
