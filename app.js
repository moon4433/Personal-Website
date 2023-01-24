//jshint esversion:6
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('home', {  });
});

app.get('/site-one', function(req, res) {
  res.render('site-one', {  });
});

app.get('/site-two', function(req, res) {
  res.render('site-two/home', {  });
});

app.get('/site-two/about', function(req, res) {
  res.render('site-two/about', {  });
});

app.get('/site-two/other-work', function(req, res) {
  res.render('site-two/other-work', {  });
});

app.get('/site-two/contact', function(req, res) {
  res.render('site-two/contact', {  });
});

app.get('/site-three', function(req, res) {
  res.render('site-three/home', {  });
});

app.get('/site-three/about', function(req, res) {
  res.render('site-three/about', {  });
});

app.get('/site-three/contact', function(req, res) {
  res.render('site-three/contact', {  });
});

app.get('/site-three/gallery', function(req, res) {
  res.render('site-three/gallery', {  });
});

app.get('/site-three/terms-of-use', function(req, res) {
  res.render('site-three/terms-of-use', {  });
});

app.get('/site-three/privacy-policy', function(req, res) {
  res.render('site-three/privacy-policy', {  });
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
