# Mean Stack: Movie List (CRUD)

RTB01
#01 Install NodeJS
#02 Install MongoDB
#03 NPM Global Installation
   npm install -g npm
   npm cache clean
   npm install -g grunt-cli 
   npm cache clean
   npm install -g bower 
   npm cache clean
   npm install -g yo 
   npm cache clean
   npm install -g generator-karma 
   npm cache clean
   npm install -g generator-angular
   npm cache clean
   npm install -g nodemon


RTB02
#04 Make Dir/Clone Mean App - Setup the project folder "meanapp"
#05 mkdir server && cd server
#06 npm setup and install needed MEAN dependencies packages
   npm init
   npm cache clean
   npm install --save express
   npm cache clean
   npm install --save mongoose
   npm cache clean
   npm install --save node-restful
   npm cache clean
   npm install --save method-override
   npm cache clean
   npm install --save body-parser
   npm cache clean
   npm install --save lodash


RTB03
#07 Writing API first (Server side code)
#08 server.js: Server Side bootstrap file
#09 setup server side app
   Express is the app which serves the request
   Listen to the server
#10 Run the server: Cd into the server folder, node server


RTB04
#11 Model: Creating models /server/models/*.*


RTB05
#12 Model Index: require('/config/models')
#13 Load Models in the server


RTB06
#14 Controllers: Create Controllers /server/controllers/*.*
#15 REST - ResourceJS: Use Express library (resourcejs) that reflects a Mongoose model to a RESTful interface
  npm install resourcejs - in server folder
  
  // Create the REST resource. 
  Resource(app, '', 'resourceURL', ResourceModel).rest();
  The following rest interface would then be exposed.

  /resourceURL - (GET) - List all resources.
  /resourceURL - (POST) - Create a new resource.
  /resourceURL/:id - (GET) - Get a specific resource.
  /resourceURL/:id - (PUT) - Replaces an existing resource.
  /resourceURL/:id - (PATCH) - Updates an existing resource.
  /resourceURL/:id - (DELETE) - Deletes an existing resource.


RTB07: Bug Fix
#16 app.use('/') changed to app.use('/hello')
  if the '/' is used no other server request would be catered as they are all extensions of '/*'
  if the '/hello' is used no other server request ('/hello/wsx') would be catered as they are all extensions of '/hello/*'


RTB08
#17 Controller Index: require('/config/routes')
#18 Load Routes/Controllers in the server so as to access the REST services


RTB09
#20 Client: Building Client side (Front end)
#21 mkdir /client in /meanapp (project root) folder
#22 Using Scaffolding tool Yeoman to generate skeleton of the client app
	mkdir client && cd client
	yo angular
	Ctrl (exit out of yo angular)
	grunt serve (start the server @ localhost:9000) 
	app.js: Client Side bootstrap file (/client/app/scripts/app.js)
	indes.html (/client/app/index.html)


RTB10
#23 Create Route: (Movies Route) inside client folder
	yo angular:route movies


RTB11
#24 Basic App with Movie MVC. Not connected to Service yet.


RTB12
#25 Hooking up Client to Server (View Movie List)
#26 Using restangular (on client) to invoke RESTful services on the server.
	Restangular is an AngularJS service that simplifies common GET, POST, DELETE, and UPDATE requests.
	It's a perfect fit for any WebApp that consumes data from a RESTful API.
#27 Use bower to install restangular package under client.
	bower install --save restangular
#28 Add bower_component -> restangular to the main layout (client/app/index.html)


RTB13: Code Cleanup
#29 Rename the controllers
#30 Change from angular-route to angular-ui-route
	bower install --save angular-ui-router
	add (if not added) bower_components/angular-ui-router/release/angular-ui-router.js


RTB14: COMPETE CRUD
#31 CRUD: Setting up a complete CRUD.
#32 Adding other MOVIE CRUD routes: movie-add, movie-view, movie-update, movie-delete
	yo angular:route movie-add 
		(1)movie-add.html	: view file
		(2)movie-add.js		: controller (Movie-AddCtrl)
		(3)app.js					: create a route for ADD /movie-add
	
RTB15
#33 Angular Directive: Directive provides the ability to create new HTML elements/tags etc.
	<youtube> directive to play videos (not just you-tube)
