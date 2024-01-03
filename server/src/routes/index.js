const express = require("express");
const router = express.Router();

data = [
  {
    id: 1,
    name: "Name 1",
  },
  {
    id: 2,
    name: "Name 2",
  },
];

router.get("/", (req, res) => {
  res.json(data);
});

module.exports = router;
