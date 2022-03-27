const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let jokesRule = new Schema({
  title:String,
  content:String
});

module.exports = mongoose.model("jokes", jokesRule);
