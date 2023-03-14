const express = require("express");
const router = express.Router();
const idioms = require("./idioms").idioms;
const {
  getCurrentDate,
  convertDateToPST,
  randomArrayItem,
} = require("./helpers");

router.get("/random", (req, res) => {
  res.json({ idiom: randomArrayItem(idioms) });
});

router.get("/today", (req, res) => {
  res.json(getCurrentDate());
});

module.exports = router;
