// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var User = require("../models/user.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:user?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.user) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      User.findOne({
        where: {
          name: req.params.user
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      User.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // // Take the request...
    var user = req.body;

    // // Create a routeName
    var name = user.name;
    // .replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      password: user.password,
      birthdate: user.birthdate
      
    });

  });
};
