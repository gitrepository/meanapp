var Resource = require('resourcejs');
module.exports = function(app, route) {

  // Create GET REST resource for the specified model ('app.models.categoryRef')
  Resource(app, '', route, app.models.categoryRef).get().index();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
