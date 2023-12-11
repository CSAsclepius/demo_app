const express = require("express");

const dbController = require("../controllers/dbController.js");

const router = express.Router();

// router.get('/')

router.post("/", dbController.createEntry, (req, res) => {
  res.json(); //send status code or stored entry?
});

module.exports = router;
