// import handlebars, express, routers, midddleware
// tell app to listen, use routes, 
// define port

// require the express module
var express = require("express");

//create an instance of express
var app = express();

//define a port 
var PORT = process.env.PORT || 8080;

//require the express handlebars
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));


//sets app tp use handlebars engine
//enable our app to use a template engine,
app.set("view engine", "handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./router/storeController.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });