// Requiring our burger model for mysql and index model for sequelize
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    // Add sequelize code for creating a burger using req.body,
    // then return the result using res.json
    console.log("****Api Routes: POST is being requested \n", 
      "\tBurger.name: ", req.body.name,
      "\n\tBurger.orderUp: ", req.body.orderUp)
    db.Burger.create({
      name: req.body.name
    }).then( dbBurger => res.json(dbBurger))
    .catch( function(err){
      console.log("Api Routes: Burger Create Error!!!: \n", err);
      res.json(err);
      console.log(res.json(err));
    });
  });

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burger.findAll({}).then( function (dbBurger) {
      console.log ("****Api routes: All the burger objects \n ", dbBurger);
      res.json(dbBurger);
    }).catch( err => res.json(err))
  });


  // PUT route for updating burgers order-status
  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update(
      {
        orderUp: req.body.orderUp
      }, {
      where: {
        id: req.params.id
      }
    }).then( function (dbBurger) {
      console.log("****Api routes: PUT is functioning to change status: \n", dbBurger);
      res.json(dbBurger);
    }).catch( err => res.json(err))
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then( function (dbBurger) {
      console.log("****Api routes: DELETE works: \n", dbBurger);
      res.json(dbBurger);
    }).catch( err => res.json(err))
  });

  
};
