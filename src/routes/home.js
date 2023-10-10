const express = require('express');
const router = express.Router();
const comicHome = require('../templates/comicHome');

const { listComics } = require("../model/comic.js")

router.get('/', (req, res) => {
  try {
    const content = listComics()
      .map(
        (x) => `<img src="data:image/png;base64,${x.image}" alt="Base64 Image">`
      )
      .join('');

    res.send(comicHome(content));
  } catch (err) {
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

// router.get('/', (req, res) => {
//     // const content = listComics()[0].image
//     const content = listComics().map(x=> `<img src="data:image/png;base64,${x.image}" alt="Base64 Image">`).join('')
//     const html = templates.renderImage(content)
//     res.send(html)
// })

module.exports = router;
