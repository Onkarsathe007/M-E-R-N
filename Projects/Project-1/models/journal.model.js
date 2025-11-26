const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = mongoose.Schema({
  name: String,
  age: Number,
  data: String,
});

const journalModel = mongoose.model("journal", journalSchema);

module.exports = journalModel;
