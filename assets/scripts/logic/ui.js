'use strict';

const app = require('../app');


const newGameSuccess = (data) => {
$('#new-game-nav').text('Play Again!');
  app.game = data.game;
  $(".print-id").text("ID of this game is: " + data.game.id);
  $(".print-id").show();

  //console.log(app);
//};
//const success = (data) => {
  //console.log(data);
};

const getSuccess = (data) => {
app.game = data.game;
$('.print-id').text("[" + data.game.cells + "]");
};
module.exports = {
  newGameSuccess,
  //success,
  getSuccess

};
