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
 let data = getFormFields(event.target);

 api.signIn(data)
   .done(ui.signInSuccess)
   .fail(ui.failure);
};
const onChangePassword = function (event) {
 event.preventDefault();
 let data = getFormFields(event.target);
 api.changePassword(data)
   .done(ui.changePasswordSuccess)
   .fail(ui.failure);
};
const onSignOut = function () {
 event.preventDefault();

 api.signOut()
   .done(ui.signOutSuccess)
   .fail(ui.failure);
};


const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#change-password').on('submit', onChangePassword);
 $('#sign-out').on('submit', onSignOut);

 //$('#sign-out').hide();
 //$('#change-password-nav').hide();
 $('#sign-in-nav').on('click', function() {
  $('#signInModal').modal('show');
 });

 $('#sign-in-button').on('click' ,function() {
  $('#signInModal').modal('hide');
  $('#sign-out').show();
  $('#change-password-nav').show();
  $('#sign-up').hide();
  $('#sign-in').hide();


 });
 $('#change-password-nav').on('click', function() {
 $('#changePasswordModal').modal('show');
  });

$('#sign-up-nav').on('click', function() {
$('#signUpModal').modal('show');
});
$('#sign-out-nav').on('click', function() {
$('#signOutModal').modal('show');
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
