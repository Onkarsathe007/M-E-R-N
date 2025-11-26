const passport = require("passport");
const userModel = require("../models/user.model.js");

module.exports = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  successFlash: "Successfully logged in!",
  failureFlash: true,
});

module.exports.renderSignup = (req, res) => {
  res.render("signup.ejs");
};

module.exports.postSignup = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    let user = new userModel({
      email: email,
      username: username,
    });
    let registerUser = await userModel.register(user, password);
    res.send("User registered");
  } catch (e) {
    res.json("Not registerd");
  }
};
