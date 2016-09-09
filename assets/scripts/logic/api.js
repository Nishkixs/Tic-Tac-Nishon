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

const updateGame = (id,x) => {
  return $.ajax({
    url: app.host + '/games/:id',
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": id,
          "value": x,
        },
        "over": false
      }
    }
  });
};


module.exports = {
newGame,
updateGame

};
