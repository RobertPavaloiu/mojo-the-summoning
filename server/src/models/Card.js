const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/config.js");

// create your User model here

let Card = db.define("Deck",{
    id: {type: DataTypes.INTEGER,
        primaryKey: true},
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
})

module.exports = {Card};