const expresss = require("express");
const router = expresss.Router();
const ListVaksin = require("../model/vaksin");

//Getting All
router.get("/", async (req, res) => {
  try {
    const vaksin = await ListVaksin.find();
    res.json(vaksin);
  } catch (err) {
    res.status(500).json({ mesage: err.message });
  }
});

//Creatig One
router.post("/", async (req, res) => {
  const vaksin = new ListVaksin({
    id: req.body.id,
    Name: req.body.Name,
    Latitude: req.body.Latitude,
    Longitude: req.body.Longitude,
  });
  try {
    const newVaksin = await vaksin.save();
    res.status(201).json(newVaksin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
