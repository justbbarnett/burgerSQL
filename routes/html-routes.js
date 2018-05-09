// *********************************************************************************
// html-routes.js - this file offers a set of routes for the html page 
//              (really just handles the burger object)
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then( function (dbBurger) {
      // Pass the returned data into a Handlebars object and then render it
      var hbsObject = { burgers: dbBurger };
      res.render('index', hbsObject);
    })
  });

};
