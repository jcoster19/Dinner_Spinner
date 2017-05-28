var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");



var User = sequelize.define("user", {
	firstName: Sequelize.STRING,
	lastName:  Sequelize.STRING,
	emailAddress: Sequelize.STRING,
	password: Sequelize.STRING,
	birthdate: Sequelize.INTEGER,
}, {
	timestamps: false
});	

User.sync();

module.exports = User;


			// name: 
			// firstName: $("#first-name").val(),
			// lastName: $("#lastname").val(),
			// password: $("#password").val(),
			// emailAddress: $("#emailAddress").val(),
			// birthdate: $("#birthdate").val()
