'use strict';
//userRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

/* router.get('/:id', (req, res) => {
    res.send('user id parameter', req.params.id)
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