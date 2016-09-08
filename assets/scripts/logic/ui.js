'use strict';

const app = require('../app');


const newGameSuccess = (data) => {
  $('#new-game-nav').text('Play Again!');
  app.game = data.game;
  console.log(app);
};

module.exports = {
  newGameSuccess,

};
