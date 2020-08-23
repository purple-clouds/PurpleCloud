'use strict';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  country: String,
  numbers: [
    String
  ],
  websites: [
    String
  ],
})

const countryModel = mongoose.model('country', countrySchema)

/* GET country listing. */
router.post('/', async (req, res) => {
  try {
    let country = new countryModel(req.body);
    let result = await country.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  };
});

router.get('/', async (req, res) => {
  try {
    let result = await countryModel.find().exec();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
})

// todo: create update conditional for post if country exists


module.exports = router;
