var express = require("express");

var router = express.Router();
///require models here
const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport");
const db = require("../models");

router.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }

  res.render("signup", {
    style: "style.css",
  });
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/login");
  }
  res.render("login",{
    style:"login.css"
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/members", isAuthenticated, (req, res) => {
  // console.log("auth", req.user);
  req.user;
  res.render("members", {
    style: "members.css",
  });
});

router.get("/aboutus", (req, res) => {
  res.render("aboutus", {
    style: "aboutus.css",
  });
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

router.get("/create", (req, res) => {
  res.render("create", {
    style: "create.css",
  });
});

router.get("/contactus", (req, res) => {
  res.render("contactus", {
    style: "contactus.css",
  });
});

router.get("/api/members/:language", (req, res) => {
  const language = req.params.language;
  console.log(language);
  db.Jobs.findAll({
    where: {
      language: language,
    },
  }).then(function(jobs) {
    console.log(jobs);
    res.json(jobs);
  });
});

//POST
router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

router.post("/create/jobs", (req, res) => {
  const jobInfo = req.body;
  console.log(jobInfo);
  db.Jobs.create({
    jobName: jobInfo.jobName,
    price: jobInfo.price,
    language: jobInfo.language,
    jobDone: false,
  })
    .then(function() {
      res.redirect("/members");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});

module.exports = router;
