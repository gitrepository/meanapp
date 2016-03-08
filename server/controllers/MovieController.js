var Resource = require('resourcejs');
module.exports = function(app, route) {

  // Create ALL (GET, POST, PUT, DELETE) the REST resource for the specified model ('app.models.movie')
  Resource(app, '', route, app.models.movie).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
