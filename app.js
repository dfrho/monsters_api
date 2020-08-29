const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
