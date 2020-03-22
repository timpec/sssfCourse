'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
const port = 3000;
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');
const cats = require('./routes/catRoute');
const users = require('./routes/userRoute');

app.use(cors())
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/cat', passport.authenticate('jwt', {session: false}), cats);
app.use('/user', passport.authenticate('jwt', {session: false}), users);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));