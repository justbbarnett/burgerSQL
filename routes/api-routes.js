
// Dependencies
// =============================================================

// Requiring our burger & index, from sequlize, models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
    // Add sequelize code to find all posts
    //return them to the user with res.json
    db.Burger.findAll({})
    .then( function (dbBurger) {
      res.json(dbBurger);
    }).catch ( function (err) {
      res.json(err);
    })
  });

  app.post("/api/burgers", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json like the get
    db.Burger.create({
      name: req.body.name,
    }).then( function (dbBurger) {
      res.json(dbBurger);
    }).catch ( function (err) {
      res.json(err);
    })
  });

  app.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
      order: req.body.order
    }, {
      where: {
        id: req.body.id
      }
    }).then( function (dbBurger) {
      res.json(dbBurger);
    }).catch ( function (err) {
      res.json(err);
    })
  });

  app.delete ("/api/burgers/:id", function (req, res) {
    db.Burger.destroy ({
      where: {
        id: req.params.id
      }
    }).then( function (dbBurger) {
      res.json(dbBurger);
    }).catch ( function (err) {
      res.json(err);
    })
  })
  
};
