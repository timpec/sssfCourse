'use strict';
//catRoute
const express = require('express');
const multer = require('multer')
var upload = multer({ dest: './uploads/' })
const router = express.Router();
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

/* router.get('/:id', (req, res) => {
    res.send('Cat id parameter', req.params.id)
}); 
*/

router.post('/', upload.single('file'), (req, res, next) => {
    res.send(req.file);
    console.log(req.body);
})

var catUpload = upload.fields([
    { name: 'name'},
    { name: 'age'},
    { name: 'weight'},
    { name: 'owner'},
    { name: 'cat'}
]);

router.post('/', catUpload, (req, res) => {
    console.log("Cat post");
    req.files['cat'][0]
    res.send('Post');
});

router.put('/', (req, res) => {
    res.send('Put');
});
  
router.delete('/', (req, res) => {
    res.send('Delete');
});
  
module.exports = router;