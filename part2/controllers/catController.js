'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
    // Get cat by id
    console.log('cat id parameter', req.params.id);
    const cat = cats.filter(cat => cat.id === req.params.id).pop();
    res.json(cat);
}
   
module.exports = {
  cat_list_get,
  cat_get,
};