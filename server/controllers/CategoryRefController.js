var Resource = require('resourcejs');
module.exports = function(app) {

  // Create GET REST resource for the specified model ('app.models.categoryRef')
  Resource(app, '', 'categoryref', app.models.categoryRef)..get().index();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
