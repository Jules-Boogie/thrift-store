// require mysql 
var mysql = require("mysql");

// //set up the connection to database
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Jule1995!",
//   database: "boutique_db"
// });


//set up the connection to database
var connection = mysql.createConnection({
  host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "tlmvh5b1ho9c5fx0",
  password: "wif2u3eddm8lhqxr",
  database: "ji9cutxr6xmyceyq"
});
// // Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
