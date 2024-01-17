const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

router.post("/auth", (req, res) => {
  const { email, password } = req.body;
  userQueries
    .auth(email, password)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/createUser", (req, res) => {
  const { name, email, password } = req.body;
  userQueries
    .createUser(name, email, password)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:email", (req, res) => {
  const { email } = req.params;
  userQueries
    .getUserByEmail(email)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
