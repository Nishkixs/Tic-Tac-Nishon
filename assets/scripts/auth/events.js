'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
 event.preventDefault();
 let data = getFormFields(event.target);


 api.signUp(data)
   .done(ui.success)
   .fail(ui.failure);
};
const onSignIn = function (event) {
 event.preventDefault();
 getFormFields(event.target);

 api.signIn(event.target)
   .done(ui.Success)
   .fail(ui.failure);
};



const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);

 $('#sign-out').hide();
 $('#change-password').hide();
 $('#sign-in-nav').on('click', function() {
  $('#signInModal').modal('show');
 });

 $('#sign-in-button').on('click' ,function() {
  $('#signInModal').modal('hide');
  $('#sign-out').show();
  $('#change-password').show();
  $('#sign-up').hide();
  $('#sign-in').hide();
 });


 $('#sign-up-nav').on('click', function() {
  $('#signUpModal').modal('show');
 });

 $('#sign-up-button').on('click' ,function() {
  $('#signUpModal').modal('hide');
  $('#sign-out').hide();
  $('#change-password').show();
  $('#sign-up').hide();
 });


};

module.exports = {
 addHandlers,
};
