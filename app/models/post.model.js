const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
    title: String,
    content: String,
    UserId: String,
    image: String,
    likeby: Array,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },

  })

const Post = mongoose.model(
  "Post",
  Schema
);



module.exports = Post;
