const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const localPassport = require("passport-local");
const passport = require("passport");
const flash = require("connect-flash");

//model
const userModel = require("./models/user.model.js");

//-----------------AUTH------------------------
//express session
const expressSession = require("express-session");
app.use(expressSession({ 
  secret: "sescret",
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localPassport(userModel.authenticate()));

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

//--------------------------------------------

//for post method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to mongoDB
async function ConnectMongo() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Journal");
    console.log("Connected to MongoDB ");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
}
ConnectMongo();

const journalRouter = require("./routes/journal.routes.js");
const authRouter = require("./routes/auth.routes.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));

app.use("/", journalRouter);
app.use("/auth", authRouter);
app.listen(process.env.PORT, (req, res) => {
  console.log("listening on port :" + process.env.PORT);
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.currentUser = req.user; // optional: to access user details in EJS
  next();
});
