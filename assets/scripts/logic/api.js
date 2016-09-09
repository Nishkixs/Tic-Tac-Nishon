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


module.exports = {
newGame,
updateGame

};
