'use strict';

const Decrypter = require('./decrypter');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/decode', function(req, res) {
  res.send(Decrypter.errorHandler(req.body));
});

app.listen(3000);
