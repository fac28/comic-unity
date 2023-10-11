//Server
const express = require('express');
const staticHandler = express.static('public');
const bodyParser = require('body-parser');

const app = express();
const homeRoutes = require('./routes/home.js');
const drawRoutes = require('./routes/draw.js');
const saveRoutes = require('./routes/save.js');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(staticHandler);
app.use('/', homeRoutes);
app.use('/draw', drawRoutes);
app.use('/save', saveRoutes);

module.exports = app;
