var Resource = require('resourcejs');
module.exports = function(app) {

  // Create ALL (GET, POST, PUT, DELETE) the REST resource for the specified model ('app.models.movie')
  Resource(app, '', 'movie', app.models.movie).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
