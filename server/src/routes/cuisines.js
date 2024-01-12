const express = require("express");
const router = express.Router();
const cuisinesQueries = require("../db/queries/cuisines");

router.get("/", (req, res) => {
  cuisinesQueries
    .getAllCuisines()
    .then((data) => {
      res.status(200).json(data.cuisines);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;