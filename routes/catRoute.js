'use strict';

const router = require('express').Router();
const cat = require('../model/catModel');

router.route('/:gender?/:age?/:weight?')
  .post(async (req, res) => {
    console.log(req.body)
    try{
      const myCat = await cat.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        color: req.body.color,
        weight: req.body.weight,
      });
      res.send(`Added cat: ${myCat.name}`);
    }
    catch (e) {
      console.log('error', e.message);
      res.json({message: e.message})
  }
  })
  .get(async (req, res) => {
    console.log(req.query)
    if (req.query.gender === undefined) {
      console.log("All the cats..")
      res.json(await cat.find());
    } else {
    try {
      const data = req.query
      res.json(await cat.find()
      .where('gender').equals(data.gender)
      .where('age').gt(data.age)
      .where('weight').gt(data.weight)
      )
  }
  catch(e) {
    console.error('station_get', e);
    res.status(500).json({message: e.message});
  }
}
})
  .patch(async (req, res) => {
    const mod = await cat.updateOne({ _id: req.body.id });
    res.status(200).send(`updated sucessfully ${mod.name} cats stats`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.body.id });
    res.send(`deleted cat ${del.name}`);
  });

  router.get('/:age?/:weight?')
  .get(async (req, res) => {

  })


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