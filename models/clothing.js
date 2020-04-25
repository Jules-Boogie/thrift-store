var orm = require("../config/orm.js");

var clothing = {

    viewAll: function(cb) {
        orm.viewAll("clothing", function(res){
            cb(res);
        });
    },
    viewOne: function(condition,cb) {
        orm.viewAll("clothing", condition, function(res){
            cb(res);
        });
    },   
  
    addListing: function(cols,vals,cb){
        orm.addListing("clothing", cols, vals, function(res){
            cb(res);
        });
    },
    updateListing: function(ColVals, condition, cb){
        orm.updateListing("clothing", ColVals, condition, function(res){
            cb(res);
        });
    },
    buyItem: function(condition,cb){
        orm.buyItem("clothing", condition, function(res){
            cb(res);
        });
    }
  
  }
  module.exports = clothing;