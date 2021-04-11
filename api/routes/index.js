const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/Users");

const registerRouter = require("./register");

router.use("/api/register", registerRouter);

router.get("/api", (req, res) => {
  res.send("Esta es la pagina principal");
});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/api/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/api/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});
/* router.post("/api", (req, res)=>{
    User.create(req.body).then((user)=>{
        res.status(201).send (user)
    })
}) */
module.exports = router;
