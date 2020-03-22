'use strict';
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

const getUser = (email) => {
  const user = users.filter((usr) => {
    //console.log(email)
    if (usr.email === email) {
      //console.log(usr)
      return usr;
    }
  });
  return user[0];
};

const getUserLogin = (email) => {
  const user = users.filter((usr) => {
    //console.log(usr.email)
    if (usr.email === email[0]) {
      console.log("returning user: ", usr);
      return usr;
    }
  });
  console.log(user[0])
  return user;
};

module.exports = {
  users, getUserLogin, getUser,
};