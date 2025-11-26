const express = require("express");
const app = express();
const router = express.Router();
const userModel = require("../models/user.model.js");
const passport = require("passport");
const authController = require("../controllers/auth.controller.js");

router.get("/login", (req, res) => {
  console.log(req.user);
  res.render("login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    successFlash: "Successfully logged in!",
    failureFlash: true,
  }),
);

router
  .route("/signup")
  .get(authController.renderSignup)
  .post(authController.postSignup);

module.exports = router;
