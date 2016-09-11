'use strict';

const app = require('../app');


//const success = (data) => {
  //console.log(data);
//};
//const failure = (error) => {
  //console.error(error);
//};
const signInSuccess = (data) => {
  app.user = data.user;
  $("#new-game-nav").show();
  $("#change-password-nav").show();
  $("#sign-out-nav").show();
  $('#new-game-nav').text('New Game');

};

const changePasswordSuccess = () => {
  //console.log('password changed YAY!');
};

const signOutSuccess = () => {
    app.user = null;
    $("#change-password-nav").hide();
    //console.log('Successfully signed out');


};

module.exports = {
 //success,
 //failure,
 signInSuccess,
 changePasswordSuccess,
 signOutSuccess,
};
