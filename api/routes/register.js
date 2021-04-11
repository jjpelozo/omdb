const express = require ("express");
const passport = require("passport");
const router = express.Router();
const User= require ("../models/Users")



router.post("/", (req, res, next)=>{
    User.create(req.body).then((user)=>{
        res.status(201).send (user)
    })
    .catch(next)
})


router.get("/", (req, res) =>{
    res.send ("Esta es la pagina register")
 })

module.exports = router;