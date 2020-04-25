// import handlebars, express, routers, midddleware
// tell app to listen, use routes, 
// define port

var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./router/storeController.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });