// export route
// require all models
var shoes = require("../models/shoes.js");
var accessories = require("../models/accessories.js");
var clothing = require("../models/clothing.js");

module.exports = function(app){

//shoes
app.get("/", function(req, res){
    shoes.viewAll(function(data){
        var hbsObject = {
            shoes: data
        };
        res.render("whatever", hbsObject)
    })
})

app.post("/api/shoes", function(req,res){
    shoes.create([
        "Type", "Designer", "Cost"

    ],
    [req.body.type, req.body.designer, req.body.cost], function(result){
        res.json({ id: result.inserID})
    })
})

app.put("/api/shoes/:id", function(req,res){
    var condition = "id = " + req.params.id;
    shoes.updateListing({
        Cost: req.body.cost}, condition, function(result){
            if(result.changedRows == 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }


    )
})

app.delete("/api/shoes/:id", function(req,res){
    var condition = "id = " + req.params.id;
    shoes.buyItem(condition, function(result){
        if(result.affectedRows == 0){
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})


//clothing
app.get("/", function(req, res){
    clothing.viewAll(function(data){
        var hbsObject = {
            shoes: data
        };
        res.render("whatever", hbsObject)
    })
})

app.post("/api/clothing", function(req,res){
    clothing.create([
        "Type", "Designer", "Cost"

    ],
    [req.body.type, req.body.designer, req.body.cost], function(result){
        res.json({ id: result.inserID})
    })
})

app.put("/api/clothing/:id", function(req,res){
    var condition = "id = " + req.params.id;
    clothing.updateListing({
        Cost: req.body.cost}, condition, function(result){
            if(result.changedRows == 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }


    )
})

app.delete("/api/clothing/:id", function(req,res){
    var condition = "id = " + req.params.id;
    clothing.buyItem(condition, function(result){
        if(result.affectedRows == 0){
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})






//accessories
app.get("/", function(req, res){
    accessories.viewAll(function(data){
        var hbsObject = {
            shoes: data
        };
        res.render("whatever", hbsObject)
    })
})

app.post("/api/accessories", function(req,res){
    accessories.create([
        "Type", "Designer", "Cost"

    ],
    [req.body.type, req.body.designer, req.body.cost], function(result){
        res.json({ id: result.inserID})
    })
})

app.put("/api/accessories/:id", function(req,res){
    var condition = "id = " + req.params.id;
    accessories.updateListing({
        Cost: req.body.cost}, condition, function(result){
            if(result.changedRows == 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }


    )
})

app.delete("/api/accessories/:id", function(req,res){
    var condition = "id = " + req.params.id;
    accessories.buyItem(condition, function(result){
        if(result.affectedRows == 0){
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})



}










