'use strict';

const app = require('../app');


const newGameSuccess = (data) => {
  $('#new-game-nav').text('Play Again!');
  app.game = data.game;
  console.log(app);
};
const success = (data) => {
  console.log(data);
};

const getSuccess = (data) => {

$('.getinfo').text(data.game.cells);
  console.log(data);
};
module.exports = {
  newGameSuccess,
  success,
  getSuccess

};
