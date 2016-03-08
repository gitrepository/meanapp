var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support: Openup the REST services to every one
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {
  
  // Load the models & assign them app 
  //-so that they can be refered elsewhere (like in controllers)
  app.models = require('./config/models');

  // Load the routes.
  var routes = require('./config/routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

  app.use('/hello', function(req, res, next){
    res.send("Hello World");
    //Signal express that's it's ok to go to next middleware request
    //If not there, the browser will hang
    next();
  });
    
  console.log('Listening on port 3000...');
  app.listen(3000);
});
