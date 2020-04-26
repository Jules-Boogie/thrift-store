//import `orm.js`

//export item.js

var orm = require("../config/orm.js");

var shoes = {

    viewAll: function(cb) {
        orm.viewAll("shoes", function(res){
            cb(res);
        });
    },
    viewOne: function(condition,cb) {
        orm.viewOne("shoes", condition, function(res){
            cb(res);
        });
    },  
    addListing: function(cols,vals,cb){
        orm.addListing("shoes", cols, vals, function(res){
            cb(res);
        });
    },
    updateListing: function(ColVals, condition, cb){
        orm.updateListing("shoes", ColVals, condition, function(res){
            cb(res);
        });
    },
    buyItem: function(condition,cb){
        orm.buyItem("shoes", condition, function(res){
            cb(res);
        });
    }
  
  };

  module.exports = shoes;