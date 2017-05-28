var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
	username: Sequelize.STRING,
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

