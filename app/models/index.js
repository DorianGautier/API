const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.pilote = require("./pilote.model");
db.team = require("./team.model");
db.course = require("./course.model");
db.resultat = require("./resultat.model");

module.exports = db;