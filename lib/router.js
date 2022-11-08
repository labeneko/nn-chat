'use strict';
const postsHandler = require('./posts-handler');
const logoutHandler = require('./logout-handler');
const notfoundHandler = require('./notfound-handler');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      logoutHandler.handle(req, res);
      break;
    default:
      notfoundHandler.handle(req, res);
      break;
  }
}

module.exports = {
  route
};