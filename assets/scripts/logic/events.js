'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
//const app = require('.././app');

let gameOver = false;

let player = "x";

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

let counter = 0;



const onNewGame = function onNewGame(event) {
  event.preventDefault();
  counter = 0;
  player = 'x';
  gameOver = false;
  $('.game-board').show();
  $('.printArray').text('');
  $('.over-lay').text('');
  $('.col-xs-4').text('');
  $('#get-game').show();
  $('.make-account').text("LET'S GET READY TO RUMBLEEEEEEEE!!!!!!!");
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};



const clearBoard = function() {
  gameBoardArray = ['', '', '', '', '', '', '', '', ''];
  //console.log("board cleared");
};

const threeX = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'x') && (cellTwo === 'x') && (cellThree === 'x');
};


const threeO = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'o') && (cellTwo === 'o') && (cellThree === 'o');
};


const rowWinX = function() {
  return threeX(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
    threeX(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
    threeX(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};


const oWinRows = function() {
  return threeO(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
    threeO(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
    threeO(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};


const columnWinX = function() {
  return threeX(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
    threeX(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
    threeX(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};


const oWinCol = function() {
  return threeO(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
    threeO(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
    threeO(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};


const diagonalWinX = function() {
  return threeX(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
    threeX(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};


const oWinDiag = function() {
  return threeO(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
    threeO(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};


const xWins = function() {
  return rowWinX() || columnWinX() || diagonalWinX();
};


const oWins = function() {
  return oWinRows() || oWinCol() || oWinDiag();
};

const getWinner = function() {


  if (xWins('X')) {
    //console.log("x wins");
    $('.make-account').text('X Wins');
    $('#get-game').hide();
    $('.game-board').hide();
    gameOver = true;
  } else if (oWins('O')) {
    //console.log("o wins");
    $('.make-account').text('O IS THE WINNER!');
    $('#get-game').hide();
    $('.game-board').hide();
    gameOver = true;
  } else {
    if (counter === 9) {
      gameOver = true;
      counter = 0;
      gameBoardArray = [];
      $('.make-account').text('Tie: Like kissing your sister');
      $('#get-game').hide();
      $('.game-board').hide();
    }

    return null;
  }
};



const xOonBoard = function(event) {
  let cellClicked = event.target,
    id = event.target.id;


  event.preventDefault();

  if (player === 'x' && $(this).text() === '') {
    counter++;
    $(cellClicked).html('x');
    gameBoardArray[id] = player;
    getWinner();
    api.updateGame(id, player, gameOver);
    //console.log("gameOver: " + gameOver);

    //console.log(gameBoardArray);
    player = 'o';
    //console.log(counter);


  }
  if (player === 'o' && $(this).text() === '') {
    counter++;
    $(cellClicked).html('o');
    gameBoardArray[id] = player;
    getWinner();
    api.updateGame(id, player, gameOver);
    //console.log("gameOver: " + gameOver);

    //console.log(gameBoardArray);
    player = 'x';
    //console.log(counter);

  }
};


const onGetGame = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  //console.log("data is " + data);
  api.getGame(data)
    .done(ui.getSuccess)
    .fail(ui.failure);
};



const addHandlers = () => {
  $('.newgamebutton').on('click', onNewGame);
  $('.newgamebutton').on('click', clearBoard);
  $('.col-xs-4').on('click', xOonBoard);
  $('#get-game').on('submit', onGetGame);
  $('.game-board').hide();
  $('#get-game').hide();
  $("#new-game-nav").hide();
  $("#change-password-nav").hide();
  $("#sign-out-nav").hide();


};





module.exports = {
  addHandlers,
  xOonBoard,
  gameBoardArray,
  clearBoard,
  gameOver,
  getFormFields,

};
