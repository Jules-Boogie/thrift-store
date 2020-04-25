
# Thrift Store Inventory App
Welcome to the Thrift Store Inventory App Repository!

## Summary 
 This app serves as a tool for users to buy, add, and update items on an online thrift store. The app is a work in progress that will be improved with user authentication.

## Thrift Store Inventory App Deployed Link

[Life Deployed Link](https://thrift-store.herokuapp.com/)


## Thrift Store Inventory App Photos
 ### Home Page
![App Photo](https://github.com/Jules-Boogie/thrift-store/blob/master/assets/Capture.PNG)


![App Photo]()


# Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [Express Handlebars](https://www.npmjs.com/package/express-handlebars)                |  Express-handlebars is a template engine that can manipulate HTML code from the server side using the server side code provided.                   |
| [MYSQL](https://www.mysql.com/)                              |           Open source relational database management system.              |


## Code Snippet
The code below is an object relational map used for the shoes, accessories, and clothing models. This line of code works to query a specific table in our database given a certain condition is being met. 
```
viewOne: function (table, condition, cb) {
    var queryString = "SELECT * FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
```


## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/thrift-store.git ``` with terminal in the directory of your choice. 



## Installation Procedures
```
$ npm init -y 
$ npm install express
$ npm install express-handlebars
$npm install mysql

```


## Author Links

**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)
