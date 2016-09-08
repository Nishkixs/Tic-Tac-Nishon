'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('.././app');

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api creates a new game with unique game id and
//attaches it to the user logged in
const onNewGame = function onNewGame(event) {
  event.preventDefault();
  $('.col-xs-4').text('');
  $('.col-xs-4').data('val', '0');
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];


//let winCritera = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],

//  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

const onPlaceX = function (event) {
  event.preventDefault();
  if (app.player === 'x') {
    app.player = 'o';
    let cellclicked = event.target;
    $(cellclicked).html('O');
  } else if (app.player === 'o') {
    app.player = 'x';
    let cellclicked = event.target;
    $(cellclicked).html('X');
  }
};







const addHandlers = () => {
  $('.newgamebutton').on('click', onNewGame);

  $('.col-xs-4').on('click', onPlaceX);
};







module.exports = {
  addHandlers,
  onPlaceX,
  gameBoardArray,
};
