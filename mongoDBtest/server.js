'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./model/db');
const cats = require('./routes/catRoute');
const users = require('./routes/userRoute');

app.use(express.urlencoded({extended: false}));
app.use('/cat', cats);
app.use('/user', users);

db.on('connected', () => {
  app.listen(3000, console.log("app listening on port 3000"));
});
