const mongoose = require("mongoose");

const listvaksinSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Latitude: {
    type: Number,
    required: true,
  },
  Longitude: {
    type: Number,
    required: true,
  },
});

const myDB = mongoose.connection.useDb("listvaksin");

const ListVaksin = myDB.model("ListVaksin", listvaksinSchema);

module.exports = ListVaksin;
