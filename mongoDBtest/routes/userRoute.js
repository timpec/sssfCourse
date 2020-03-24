'use strict';

const router = require('express').Router();
const user = require('../model/userModel');

router.route('/')
  .post(async (req, res) => {
    const myUser = await user.create({
      name: "testUser", //req.body.name,
      email: "user@mail.fi",
      password: "asd123"
    });
    res.send(`Added user: ${myUser.name}`);
  })
  .get(async (req, res) => {
    console.log("Users..")
    res.send(await user.find());
  });
  
module.exports = router;