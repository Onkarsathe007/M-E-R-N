const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");
const passportLocal = require("passport-local");

const userSchema = mongoose.Schema({
  email: String,
});

userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
