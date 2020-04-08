'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
  //TODO: schema
  username:  String,
  password: String
});

const getUserLogin = async (params) => {
  try {
    console.log("B", params);
    const [user] = await userModel.find({username: params})
    console.log("T", user)
    return user;
  } 
  catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  //users,
  //getUser,
  getUserLogin,
};
