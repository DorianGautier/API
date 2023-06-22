const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
    circuit: String,
    pilote1: String,
    pilote1time: String,
    pilote2: String,
    pilote2time: String,
    pilote3: String,
    pilote3time: String,
    pilote4: String,
    pilote4time: String,
    pilote5: String,
    pilote5time: String,
    pilote6: String,
    pilote6time: String,
    pilote7: String,
    pilote7time: String,
    pilote8: String,
    pilote8time: String,
    pilote9: String,
    pilote9time: String,
    pilote10: String,
    pilote10time: String,
    pilote11: String,
    pilote11time: String,
    pilote12: String,
    pilote12time: String,
    pilote13: String,
    pilote13time: String,
    pilote14: String,
    pilote14time: String,
    pilote15: String,
    pilote15time: String,
    pilote16: String,
    pilote16time: String,
    pilote17: String,
    pilote17time: String,
    pilote18: String,
    pilote18time: String,
    pilote19: String,
    pilote19time: String,
    pilote20: String,
    pilote20time: String,
  })

const Resultat = mongoose.model(
  "Resultat",
  Schema
);

module.exports = Resultat;
