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
#24 Customizing the Client with the newly created Movies view


























