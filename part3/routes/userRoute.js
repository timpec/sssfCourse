'use strict';
//userRoute
const express = require('express');
const multer = require('multer')
const upload = multer()
const router = express.Router();
const passport = require('../utils/pass');
const userController = require('../controllers/userController');


router.use('/user', passport.authenticate('jwt', {session: false}));

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

  
router.post('/', upload.array(), (req, res) => {
    console.log( req.body)
    res.json(req.body);
    res.send('Post');
});

router.put('/', (req, res) => {
    res.send('Put');
});
  
router.delete('/', (req, res) => {
    res.send('Delete');
});
  
module.exports = router;