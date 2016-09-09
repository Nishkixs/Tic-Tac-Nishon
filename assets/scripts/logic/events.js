'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('.././app');

let gameOver = false;


let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

let counter = 0;

const onNewGame = function onNewGame(event) {
  event.preventDefault();
  $('.col-xs-4').text('');
  $('.col-xs-4').data('val', '0');
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

// const onUpdateGame = function onUpdateGame() {
//   event.preventDefault();
//   let data = {};
//   api.updateGame(data)
//     .done(ui.newGameSuccess)
//     .fail(ui.failure);
// };






// const onGetGames = function onGetGames(event){
//   event.preventDefault();
//   api.getGames()
//     .done(ui.getGamesSuccess)
//     .fail(ui.failure);
// };




const clearBoard = function (){
gameBoardArray = ['', '', '', '', '', '', '', '', ''];

console.log("board cleared");
};

const allX = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'x') && (cellTwo === 'x') && (cellThree === 'x');
};

//function to check if three cells hold a value of O
const allO = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'o') && (cellTwo === 'o') && (cellThree === 'o');
};

//this function passes in the horizontal cells and passes them to the allX
//function to check if there is any row across of all X's
const xWinRows = function(){
  return allX(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
         allX(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
         allX(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

//this function passes in the horizontal cells and passes them to the allO
//function to check if there is any row across of all O's
const oWinRows = function(){
  return allO(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
         allO(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
         allO(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

//this function passes in the vertical cells and passes them to the allX
//function to check if there is any column of all X's
const xWinCol = function(){
  return allX(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
         allX(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
         allX(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

//this function passes in the vertical cells and passes them to the allO
//function to check if there is any column of all O's
const oWinCol = function(){
  return allO(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
         allO(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
         allO(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

//this function passes in the diagonal cells and passes them to the allX
//function to check if there is any diagonal of all X's
const xWinDiag = function(){
  return allX(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
         allX(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

//this function passes in the diagonal cells and passes them to the allO
//function to check if there is any diagonal of all O's
const oWinDiag = function(){
  return allO(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
         allO(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

//this function runs the previous functions to check if there are any X winning
//scenarios
const xWins = function(){
  return xWinRows() || xWinCol() || xWinDiag();
};

//this function runs the previous functions to check if there are any O winning
//scenarios
const oWins = function(){
  return oWinRows() || oWinCol() || oWinDiag();
};

const getWinner = function(){
    if(xWins('X')) {
console.log("x wins");
      //$('.user-message').text('X IS VICTORIOUS!');
      $('.col-xs-4').data('val', '1');
      //gameBoardArray = [];
      counter = 0;
      gameOver = true;
    }else if(oWins('O')){
      console.log("o wins");
      //$('.user-message').text('O EQUALS CHAMPION!');
      $('.col-xs-4').data('val', '1');
      //gameBoardArray = [];
      counter = 0;
      gameOver = true;
    }else{
      if(counter === 9){
        //gameBoardArray = [];
        counter = 0;
        gameOver = true;
        console.log("tie");
      //$('.user-message').text('tie...gross');
    }
      return null;
    }
  };
    // update.update((counter - 1), $(this).text(), over);






// const turnHandlerOff = function(id) {
//   $('#' + id).off('click', xOonBoard);
//
// };
//
// const isValidMove = function(id) {
//   if ($('#' + id).html() !== '') {
//     turnHandlerOff(id);
//   }
// };
let player = 'o';
const playerSwitch = function(){
  if (player === 'x') {
    player = 'o';
}
else if (player === 'o') {
      player = 'x';

}
};
const xOonBoard = function (event) {
    counter++;
  let id=event.target.id;
  event.preventDefault();
  if (app.player === 'x') {
    app.player = 'o';
    let cellClicked = event.target;
    $(cellClicked).html('O');
    //let index = $('#' + cellclicked).data("id");
    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);
  } else if (app.player === 'o') {
    app.player = 'x';
    let cellClicked = event.target;
    $(cellClicked).html('X');

    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);
    getWinner();

    api.updateGame(id,app.player);

  }
};






const addHandlers = () => {
  $('.newgamebutton').on('click', onNewGame);
  $('.col-xs-4').on('click', xOonBoard);
  $('.newgamebutton').on('click', clearBoard);
};





module.exports = {
  addHandlers,
  xOonBoard,
  gameBoardArray,
  clearBoard,
  gameOver,
  playerSwitch
  //isValidMove,
  //turnHandlerOff
};
