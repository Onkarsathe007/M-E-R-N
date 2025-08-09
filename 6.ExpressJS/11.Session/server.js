const express = require("express");
const session = require("express-session");
const app = express();
const port = 7000;
const flash = require("connect-flash");
const path = require("path");

var sessionOptions = {
    secret: "code",
    resave: true,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/register", (req, res) => {
    let { username = "anonymous" } = req.query;
    req.session.user = username;
    req.flash("name", username);
    res.redirect("/")
});

app.get("/", (req, res) => {
    res.render("page.ejs", { user: req.flash("name") });
});

app.listen(port, (req, res) => {
    console.log("Listing on port:" + port);
});
