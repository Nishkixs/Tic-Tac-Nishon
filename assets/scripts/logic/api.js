'use strict';

const app = require('../app');

const newGame = (data) => {
  return $.ajax({
    url: app.host + '/games',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const updateGame = (id,value,TorF) => {
  return $.ajax({
    url: app.host + '/games/'+app.game.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": id,
          "value": value,
        },
        "over": TorF
      }
    }
  });
};

const getGame = (data) => {
  return $.ajax({
    url: app.host + '/games/'+data.id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
  };




module.exports = {
newGame,
updateGame,
getGame,


};
