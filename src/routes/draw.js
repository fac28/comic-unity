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

// const { createComic } = require('../model/comic.js');

// router.post('/', (req, res) => {
//   const dataURL = req.body.image;
//   const base64Data = dataURL.replace(/^data:image\/png;base64,/, ''); // Remove data prefix

//   createComic(base64Data);
//   res.redirect('/..');
// });

module.exports = router;
