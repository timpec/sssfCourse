'use strict';

require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema/schema');
const authRoute = require('./routes/authRoute');
const passport = require('./utils/pass');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// dummy function to set user (irl: e.g. passport-local)
const auth = (req, res, next) => {
  req.user = false;
  next();
};

// dummy function to check authentication (irl: e.g. passport-jwt)
const checkAuth = (req, res) => {
  passport.authenticate('jwt', {session: false}, (err, user) =>{
      if (err || !user) {
          throw new Error('Not authenticated');
      }
  })(req, res)
};

//app.post(auth);

app.use(
    '/graphql', (req, res) => {
      graphqlHTTP({
        schema: MyGraphQLSchema,
        graphiql: true,
        context: {req, res, checkAuth},
      })(req, res);
    });

app.listen(3000);
