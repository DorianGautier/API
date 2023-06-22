const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    yearinf1: Number,
    worldchampionships: Number,
    wins: Number,
    podiums: Number,
    polepositions: Number,
    team: String,
    teamlogo: String,
    country: String,
    countryflag: String,
    image: String,
    description: String,
    active: Boolean,
  })

const Pilote = mongoose.model(
  "Pilote",
  Schema
);

module.exports = Pilote;
