const expresss = require("express");
const router = expresss.Router();
const ListPlasma = require("../model/plasma");

//Getting All
router.get("/", async (req, res) => {
  try {
    const plasma = await ListPlasma.find();
    res.json(plasma);
  } catch (err) {
    res.status(500).json({ mesage: err.message });
  }
});

//Creatig One
router.post("/", async (req, res) => {
  const plasma = new ListPlasma({
    id: req.body.id,
    nama: req.body.nama,
    usia: req.body.usia,
    berat: req.body.berat,
    jk: req.body.jk,
    hamil: req.body.hamil,
    goldar: req.body.goldar,
    rhesus: req.body.rhesus,
    "pernah-covid": req.body["pernah-covid"],
    "sembuh-covid": req.body["sembuh-covid"],
    transfusi: req.body.transfusi,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  try {
    const newplasma = await plasma.save();
    res.status(201).json(newplasma);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
