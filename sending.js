const express = require("express");
const fs = require("fs");
const axios = require("axios");

fs.readFile("./plasma.json", "utf8", (err, data) => {
  if (err) console.log(err);
  objdata = JSON.parse(data);
  objdata.map((onedata) => {
    axios
      .post("http://localhost:3001/listplasma", onedata)
      .then((response) => console.log(response));
  });
});
