//Server code here
const express = require('express')
const app = express()

const templates = require('./templates/testTemplates.js')
const {listComics} = require('./model/comic.js')



app.get('/', (req, res) => {


    const content = listComics()[0].imageBLOB
    const html = templates.testTag(content)

    res.send(html)
})

module.exports = app;
