'use strict';

const router = require('express').Router();
const cat = require('../model/catModel');

// Hardcoded for testing
router.route('/')
  .post(async (req, res) => {
    const myCat = await cat.create({
      name: "testCat2", //req.body.name,
      age: "2", //req.body.age,
      gender: "male",// String,
      color: "green", // String,
      weight: "1", //Number
      owner: "5e7a7a1bbbd84b27bc9f2ef9"
    });
    res.send(`Added cat: ${myCat.name}`);
  })
  .get(async (req, res) => {
    console.log("Cats..")
    res.send(await cat.find().populate('owner'));
  });

/*
router.route('/:id')
  .get(async (req, res) => {
    res.send(await cat.findById(req.params.id));
  })
  .patch(async (req, res) => {
    const mod = await cat.updateOne({ _id: req.params.id }, { title: req.body.title });
    res.status(200).send(`updated sucessfully ${mod.nModified} cat post`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.params.id });
    res.send(`deleted ${del.deletedCount} cat post`);
  });
*/
  
module.exports = router;