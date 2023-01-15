//jshint esversion:6
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('home', {  });
});

app.get('/game-one', function(req, res) {
  res.render('game-one', {  });
});

app.get('/game-two', function(req, res) {
  res.render('game-two', {  });
});

app.get('/game-three', function(req, res) {
  res.render('game-three', {  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Server is listening on port 3000...');
});
