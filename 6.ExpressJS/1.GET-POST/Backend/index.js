const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
let port = 8080;

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, (req, res) => {
  console.log("Listening for port :", port);
});

app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send(`Welcome ${user} great password ${pass}`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

