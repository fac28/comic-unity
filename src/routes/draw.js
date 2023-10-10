const express = require('express');
const router = express.Router();

const drawImage = require('../templates/drawImage');

router.get('/', (req, res) => {
  try {
    res.send(drawImage());
  } catch (err) {
    console.log(err);
    throw err;
  }
});

router.get('/back-button', (req, res) => {
  try {
    res.redirect('/');
  } catch (err) {
    console.log(err);
    throw err;
  }
});

module.exports = router;
