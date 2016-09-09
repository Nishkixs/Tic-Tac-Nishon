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




const XOonBoard = function (event) {
  let id=this.id;
  event.preventDefault();
  if (app.player === 'x') {
    app.player = 'o';
    let cellclicked = event.target;
    $(cellclicked).html('O');
    //let index = $('#' + cellclicked).data("id");
    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);

  } else if (app.player === 'o') {
    app.player = 'x';
    let cellclicked = event.target;
    $(cellclicked).html('X');

    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);


  }
};


//if gameBoardArray ==


// let winCriteria = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
//
//  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
//
//  // checks if move is possible
//  const isValidMove = (id) => {
//   return (!game.currentGame.cells[id] && !game.currentGame.over);
//
//  };

const endOfGame = function() {

  if
  (gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[0] === gameBoardArray[2]!== '' ||
    gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[3] === gameBoardArray[5]!== '' ||
    gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[6] === gameBoardArray[8]!== '' ||
    gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[0] === gameBoardArray[6]!== '' ||
    gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[1] === gameBoardArray[7]!== '' ||
    gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[2] === gameBoardArray[8]!== '' ||
    gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[0] === gameBoardArray[8]!== '' ||
    gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[2] === gameBoardArray[6]!== '' ) {
console.log('winner!');

} else if (){

  console.log ('draw');



};


};









const addHandlers = () => {
  $('.newgamebutton').on('click', onNewGame);

  $('.col-xs-4').on('click', XOonBoard);
};







module.exports = {
  addHandlers,
  XOonBoard,
  gameBoardArray,
};
