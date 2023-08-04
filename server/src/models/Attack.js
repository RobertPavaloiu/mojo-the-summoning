const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/config.js");

// create your User model here

let Attack = db.define("Deck",{
    id: {type: DataTypes.INTEGER,
        primaryKey: true},
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
})

module.exports = {Attack};