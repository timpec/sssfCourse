'use strict';

const router = require('express').Router();
const user = require('../model/userModel');
const bcrypt = require('bcrypt');
const saltRound = 12; //okayish in 2020


router.route('/user')
  .post(async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, saltRound);
    const myUser = await user.create({
      name: req.body.name,
      email:  req.body.email,
      password: hash
    });
    res.send(`Added user: ${myUser.name}`);
  })
  .get(async (req, res) => {
    console.log("Users..")
    res.send(await user.find());
  });
  
module.exports = router;