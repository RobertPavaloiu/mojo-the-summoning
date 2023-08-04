const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/config.js");

// create your User model here

let Deck = db.define("Deck",{
    id: {type: DataTypes.INTEGER,
        primaryKey: true},
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
})

module.exports = {Deck};