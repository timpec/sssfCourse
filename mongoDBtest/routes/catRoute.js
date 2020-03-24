'use strict';

const router = require('express').Router();
const cat = require('../model/catModel');

router.route('/')
  .post(async (req, res) => {
    const cat = await cat.create({
      name: "testCat", //req.body.name,
      age: "2" //req.body.age,
    });
    res.send(`Added cat: ${cat._name}`);
  })
  .get(async (req, res) => {
    console.log("Cats..")
    res.send(await cat.find());
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