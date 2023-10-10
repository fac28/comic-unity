//Server
const express = require('express');
const staticHandler = express.static('public');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const cookieParser = require('cookie-parser');

const app = express();
const homeRoutes = require('./routes/home');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(staticHandler);
app.use('/', homeRoutes);

app.post('/save', (req, res) => {
  try {
    const data = req.body.image;
    res.json({ success: true });
    //model handling
  } catch(error) {
    console.log(error);
    throw error;
    //More meaningful error handling
  }
});

module.exports = app;
