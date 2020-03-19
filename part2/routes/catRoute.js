'use strict';
//catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

/* router.get('/:id', (req, res) => {
    res.send('Cat id parameter', req.params.id)
}); 
*/
  
router.post('/', (req, res) => {
    res.send('Post');
});

router.put('/', (req, res) => {
    res.send('Put');
});
  
router.delete('/', (req, res) => {
    res.send('Delete');
});
  
module.exports = router;