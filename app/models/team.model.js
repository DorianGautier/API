const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
    name: String,
    description: String,
    teamlogo: String,
    firstpilote: String,
    secondpilote: String,
    motormanufacturer: String,
    teamprincipal: String,
    teamowner: String,
    constructorchampionships: Number,
    yearinf1: Number,
  })

const Team = mongoose.model(
  "Team",
  Schema
);

module.exports = Team;
