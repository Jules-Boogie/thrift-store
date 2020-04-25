var orm = require("../config/orm.js");

var accessories = {

  viewAll: function(cb) {
      orm.viewAll("accessories", function(res){
          cb(res);
      });
  }, 
  viewOne: function(condition,cb) {
    orm.viewAll("accessories", condition, function(res){
        cb(res);
    });
},  

  addListing: function(cols,vals,cb){
      orm.addListing("accessories", cols, vals, function(res){
          cb(res);
      });
  },
  updateListing: function(ColVals, condition, cb){
      orm.updateListing("accessories", ColVals, condition, function(res){
          cb(res);
      });
  },
  buyItem: function(condition,cb){
      orm.buyItem("accessories", condition, function(res){
          cb(res);
      });
  }

};
module.exports = accessories;