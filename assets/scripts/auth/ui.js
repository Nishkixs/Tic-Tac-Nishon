'use strict';

const app = require('../app');


const success = (data) => {
  console.log(data);
};
const failure = (error) => {
  console.error(error);
};
const signInSuccess = (data) => {
  app.user = data.user;

};

const changePasswordSuccess = () => {
  console.log('password changed YAY!');
};

const signOutSuccess = () => {
    app.user = null;
    console.log('Successfully signed out');


};

module.exports = {
 success,
 failure,
 signInSuccess,
 changePasswordSuccess,
 signOutSuccess,
};
