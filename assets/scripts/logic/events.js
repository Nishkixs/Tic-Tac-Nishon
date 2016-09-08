'use strict';

const api = require('./api');
const ui = require('./ui');

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api creates a new game with unique game id and
//attaches it to the user logged in
const onNewGame = function onNewGame(event){
  event.preventDefault();
  $('.col-xs-4').text('');
  $('.col-xs-4').data('val', '0');
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

let gameBoardArray = ['','','','','','','','',''];


//let winCritera = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],

              //  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
let count= 0;
const clickCounter=function(){

  for(let i=0;i<8;i++){



    $('.sq').on('click', function() {
      if (!this.innerHTML) {
        if (counter % 2 === 0) {
          this.innerHTML = '0';
          currentPlayer = '0';
        } else {
          this.innerHTML = 'X';
          currentPlayer = 'X';
        }
      counter++;
    }







  }

};


const place0 = function () {
if

$('.tl').append("X","O");
let position=0;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" || "O";
console.log(gameBoardArray);
}
}
};

const place1 = function () {
$('.tm').append("X");
let position=1;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};
const place2 = function () {
$('.tr').append("X");
let position=2;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};
const place3 = function () {
$('.ml').append("X");
let position=3;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};
const place4 = function () {
$('.mm').append("X");
let position=4;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};
const place5 = function () {
$('.mr').append("X");
let position=5;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};
const place6 = function () {
$('.bl').append("X");
let position=6;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};
const place7 = function () {
$('.bm').append("X");
let position=7;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};
const place8 = function () {
$('.br').append("X");
let position=8;

for(let i=0;i<gameBoardArray.length;i++){
  if(i===position){
        gameBoardArray[i] ="X" ;
console.log(gameBoardArray);
}
}
};

// // bellow is O's
// const oplace0 = function () {
// $('.tl').append("X");
// let position=0;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
//
//
// const oplace1 = function () {
// $('.tm').append("O");
// let position=1;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
// const oplace2 = function () {
// $('.tr').append("O");
// let position=2;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
// const oplace3 = function () {
// $('.ml').append("O");
// let position=3;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
// const oplace4 = function () {
// $('.mm').append("O");
// let position=4;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
// const oplace5 = function () {
// $('.mr').append("O");
// let position=5;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
// const oplace6 = function () {
// $('.bl').append("O");
// let position=6;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
// const oplace7 = function () {
// $('.bm').append("O");
// let position=7;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };
// const oplace8 = function () {
// $('.br').append("O");
// let position=8;
//
// for(let i=0;i<gameBoardArray.length;i++){
//   if(i===position){
//         gameBoardArray[i] ="O" ;
// console.log(gameBoardArray);
// }
// }
// };




const addHandlers = () => {
  $('.newgamebutton').on('click', onNewGame);
  $('.tl').on('click',place0);
  $('.tm').on('click',place1);
  $('.tr').on('click',place2);
  $('.ml').on('click',place3);
  $('.mm').on('click',place4);
  $('.mr').on('click',place5);
  $('.bl').on('click',place6);
  $('.bm').on('click',place7);
  $('.br').on('click',place8);
  $('.game-board').on('click',clickCounter);
  // $('.tl').on('click',oplace0);
  // $('.tm').on('click',oplace1);
  // $('.tr').on('click',oplace2);
  // $('.ml').on('click',oplace3);
  // $('.mm').on('click',oplace4);
  // $('.mr').on('click',oplace5);
  // $('.bl').on('click',oplace6);
  // $('.bm').on('click',oplace7);
  // $('.br').on('click',oplace8);




};




module.exports = {
 addHandlers,
};
