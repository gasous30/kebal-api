if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

mongoose.connect(process.env.DEFAULT || "mongodb://localhost/default", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected");
});

app.use(express.json());

const listvaksinRouter = require("./routes/listvaksin");
app.use("/listvaksin", listvaksinRouter);

const listplasmaRouter = require("./routes/listplasma");
app.use("/listplasma", listplasmaRouter);

app.listen(3001, () => console.log("Server has started."));
