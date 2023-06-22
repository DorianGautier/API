const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  country: String,
  city: String,
  circuit: String,
  circuitimage: String,
  countryflag: String,
  last5winners: String,
  date: { type: Date },
})

const Course = mongoose.model(
  "Course",
  schema
);

module.exports = Course;
