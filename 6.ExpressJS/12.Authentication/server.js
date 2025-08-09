const express = require("express");
const passport = require("passport");
const LocalPassport = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./model.js");
const session = require("express-session");
const PORT = 8090;
const app = express();

app.use(session({
    secret: "thisshouldbeabettersecret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalPassport(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/registerUser", async (req, res) => {
    let fakeUser = new User({
        email: "shubham@gmail.com",
        username: "nitin1711",
    });
    let registerUser = await User.register(fakeUser, "pass@123")
    res.send(registerUser);
});

app.listen(PORT, (req, res) => {
    console.log("Listening on port: " + PORT);
})
