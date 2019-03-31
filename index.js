const express = require("express");
passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

passport.use(new GoogleStrategy());

app.get("/auth/google", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
