const mongoose = require("mongoose");

const listplasmaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  usia: {
    type: Number,
    required: true,
  },
  berat: {
    type: Number,
    required: true,
  },
  jk: {
    type: String,
    required: true,
  },
  hamil: {
    type: Number,
    required: true,
  },
  goldar: {
    type: String,
    required: true,
  },
  rhesus: {
    type: String,
    required: true,
  },
  "pernah-covid": {
    type: String,
    required: true,
  },
  "sembuh-covid": {
    type: String,
    required: true,
  },
  transfusi: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

const myDB = mongoose.connection.useDb("listplasma");

const ListPlasma = myDB.model("ListPlasma", listplasmaSchema);

module.exports = ListPlasma;
