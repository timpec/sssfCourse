'use strict';

const router = require('express').Router();
const user = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRound = 12; //okayish in 2020

const express = require('express');
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.send('With this endpoint you can get users');
});

router.get('/:id', (req, res) => {
  res.send('With this endpoint you can get a user');
});

router.post('/', userController.user_post);

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users');
});

module.exports = router;



/*
router.route('/user')
  .post(async (req, res) => {
    //const hash = await bcrypt.hash(req.body.password, saltRound);
    console.log("router", req.body)
    const myUser = await user.create({
      name: req.body.name,
      email:  req.body.email,
      password: req.body.password
    });
    res.send(`Added user: ${myUser.name}`);
  })
  .get(async (req, res) => {
    console.log("Users..")
    res.send(await user.find());
  });
  
module.exports = router;*/