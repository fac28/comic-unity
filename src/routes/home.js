const express = require('express');
const router = express.Router();
const comicHome = require('../templates/comicHome');

const { listComics } = require('../model/comic.js');
const { dailyWiper } = require('../utils/dailyWiper');

router.get('/', (req, res) => {
  try {
    // dailyWiper clears comic every new day. Comment out to disable
    dailyWiper();
    const content = listComics();
    res.send(comicHome(content));
  } catch (err) {
    console.log(err);
    throw err;
  }
});

router.get('/button', (req, res) => {
  try {
    res.redirect('/draw');
  } catch (err) {
    console.log(err);
    throw err;
  }
});

module.exports = router;
