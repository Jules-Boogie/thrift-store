// import handlebars, express, routers, midddleware
// tell app to listen, use routes, 
// define port

// require the express module
var express = require("express");

//create an instance of express
var app = express();

//define a port 
var PORT = process.env.PORT || 3000;

//require the express handlebars
var exphbs = require("express-handlebars");

//sets app tp use handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));



//enable our app to use a template engine,
app.set("view engine", "handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//we have some html in public folder that we want the app to utilize
app.use(express.static("./public"));

//require our api route
require("./router/storeController.js")(app);

//listening to the port defined above
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });