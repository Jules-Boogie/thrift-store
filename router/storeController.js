// export route
// require all models
var shoes = require("../models/shoes.js");
var accessories = require("../models/accessories.js");
var clothing = require("../models/clothing.js");
var path = require("path");

module.exports = function (app) {

    //html route

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/main.html"));
    });

    app.get("/signin", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

//signin does not have an app route yet and that was my stretch goal for this homework

    //shoes
    app.get("/shoes", function (req, res) {
        shoes.viewAll(function (data) {
            res.render("shoes", { shoes: data })
        })
    })
    // render the redirect so that user can update item for sale. 
    app.get("/shoes/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        shoes.viewOne(condition, function (data) {
            res.render("updateshoes", data[0]);
        })
    });

    app.post("/api/shoes", function (req, res) {
        shoes.addListing([
            "Type", "Designer", "Cost","Description"

        ],
            [req.body.Type, req.body.Designer, req.body.Cost, req.body.Description], function (err,result) {
                if(err) throw err;
                console.log("result", result);
                res.json({ id: result.insertId })
            })
    })

    app.put("/api/shoes/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
        shoes.updateListing({
           
            Cost: req.body.Cost
           
        }, condition, function (result) {
            console.log("result", result);
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }


        )
    })

    app.delete("/api/shoes/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
        shoes.buyItem(condition, function (result) {
            if (result.affectedRows === 0) {
                res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })


    //clothing
    app.get("/clothing", function (req, res) {
        clothing.viewAll(function (data) {
            res.render("clothing", { clothing: data })
        })
    })

    // render the redirect so that user can update item for sale. 
    app.get("/clothing/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        clothing.viewOne(condition, function (data) {
            res.render("updateclothes", data[0]);
        })
    });




    app.post("/api/clothing", function (req, res) {
        clothing.addListing([
            "Type", "Designer", "Cost", "Description"

        ],
            [req.body.Type, req.body.Designer, req.body.Cost, req.body.Description], function (result) {
                res.json({ id: result.insertId })
            })
    })

    app.put("/api/clothing/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        clothing.updateListing({
            Cost: req.body.Cost
        }, condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }


        )
    })

    app.delete("/api/clothing/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        clothing.buyItem(condition, function (result) {
            if (result.affectedRows == 0) {
                res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })






    //accessories
    app.get("/accessories", function (req, res) {
        accessories.viewAll(function (data) {
            res.render("accessories", { accessories: data })
        })
    })

    // render the redirect so that user can update item for sale. 
    app.get("/accessories/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        accessories.viewOne(condition, function (data) {
            res.render("updateaccess", data[0]);
        })
    });



    app.post("/api/accessories", function (req, res) {
        accessories.addListing([
            "Type", "Designer", "Cost", "Description"

        ],
            [req.body.Type, req.body.Designer, req.body.Cost, req.body.Description], function (result) {
                res.json({ id: result.insertID })
            })
    })

    app.put("/api/accessories/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        accessories.updateListing({
            Cost: req.body.Cost
        }, condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })

    // Type: req.body.Type,
    // Designer: req.body.Designer,
    // Cost: req.body.Cost,
    // Description: req.body.Description
    app.delete("/api/accessories/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        accessories.buyItem(condition, function (result) {
            if (result.affectedRows === 0) {
                res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })



}










