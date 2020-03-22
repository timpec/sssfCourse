'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const userModel = require('../models/userModel');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const users = [
    {
      user_id: 1,
      name: 'Foo Bar',
      email: 'foo@bar.fi',
      password: 'foobar',
    },
    {
      user_id: 2,
      name: 'Bar Foo',
      email: 'bar@foo.fi',
      password: 'barfoo',
    },
  ];

// local strategy for username password login
passport.use(new Strategy(
    async (username, password, done) => {
      const params = [username];
      console.log("Here", params);
      try {
        const [user] = await userModel.getUserLogin(params);
        console.log('Local strategy', user); // result is binary row
        if (user === undefined) {
          return done(null, false, {message: 'Incorrect email.'});
        }
        if (user.password !== password) {
          return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, {...user}, {message: 'Logged In Successfully'}); // use spread syntax to create shallow copy to get rid of binary row type
      } catch (err) {
        return done(err);
      }
  }));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
    },
    (jwtPayload, done) => {

    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    const usr = userModel.getUser(jwtPayload);
    console.log(usr.email);
    
    return done(null, usr);
    }
));

module.exports = passport;