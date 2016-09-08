'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./assets/styles/index.scss');
// require('./assets/scripts/index.scss');






const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();

});

const logicEvents = require('./logic/events.js');

// On document ready
$(() => {
  logicEvents.addHandlers();

});
