const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/config.js");

// create your User model here

let User = db.define("User",{
    id: {type: DataTypes.INTEGER,
    primaryKey: true},
    userName: DataTypes.STRING
})

module.exports = {User};