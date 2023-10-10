//Server code here
const express = require('express')
const app = express()

const templates = require('./templates/renderImage.js')
const {listComics} = require('./model/comic.js')

const homeRoutes = require("./routes/home.js");

app.use("/", homeRoutes);


module.exports = app;
