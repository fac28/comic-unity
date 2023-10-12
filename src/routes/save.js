const express = require('express');
const router = express.Router();

const { createComic } = require('../model/comic.js');
const { sanitize } = require('../utils/sanitize.js');

router.post('/', (req, res) => {
  const dataURL = req.body.image;
  const base64Data = dataURL.replace(/^data:image\/png;base64,/, ''); // Remove data prefix

  const caption = sanitize(req.body.caption);

  createComic(base64Data, caption);
  res.redirect('/..');
});

module.exports = router;
