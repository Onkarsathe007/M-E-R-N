const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("acceptCookie.ejs");
});

app.get("/process", (req, res) => {
    var { val } = req.query;
    var { cookieName } = req.query;
    res.cookie(cookieName, val);
    res.send("cookie sent to user");

});

app.listen(port, () => {
    console.log("Listing on port:" + port);
});
