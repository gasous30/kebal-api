const express = require("express");
const app = express();
let port = process.env.PORT || 3001;
const fs = require("fs");

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.get("/listvaksin", (req, res) => {
  fs.readFile(__dirname + "/" + "vaksin.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.get("/listplasma", (req, res) => {
  fs.readFile(__dirname + "/" + "plasma.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
