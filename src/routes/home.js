const express = require('express');
const router = express.Router();
const comicHome = require('../templates/comicHome');

router.get('/', (req, res) => {
  try {
    res.send(comicHome());

  } catch(err) {
    console.log(err);
    throw err;
  }
});

// router.post('/save', (req, res) => {
//   const dataURL = req.body.image;
//   const base64Data = dataURL.replace(/^data:image\/png;base64,/, ''); // Remove data prefix
//   const binaryData = Buffer.from(base64Data, 'base64');
//   console.log(binaryData, dataURL);
// });

module.exports = router;
