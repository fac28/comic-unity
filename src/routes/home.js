//home route here
const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates/renderImage.js");
const { listComics } = require("../model/comic.js")

router.get('/', (req, res) => {
    // const content = listComics()[0].image
    const content = listComics().map(x=> `<img src="data:image/png;base64,${x.image}" alt="Base64 Image">`).join('')
    const html = templates.renderImage(content)
    res.send(html)
})

module.exports = router;
