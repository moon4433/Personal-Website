//jshint esversion:6
/*
client id: 260393057932-eprfaf865lq469jjiaajht0382cgk2lo.apps.googleusercontent.com
client secret: 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
Refresh token: 1//04iGjolFX7Mq3CgYIARAAGAQSNgF-L9IrL18uG2bZvIqlnb-tgQtmvmkjEeMvxB9xGy0KdZ0o6QMUfQVL_TbMT3ihJnzvuCWUOA
*/
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config({ path: './site.env' });

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

const oauth2Client = new OAuth2(
process.env.EMAIL_ID,
process.env.EMAIL_SECRET,
process.env.EMAIL_AUTH_LOCATION);
oauth2Client.setCredentials({refresh_token:process.env.EMAIL_REFRESH_TOKEN});
const accessToken = oauth2Client.getAccessToken();

app.get('/', function(req, res) {
  res.render('home', { page: 'home' });
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
  res.render('game-one', { page: 'game1' });
});

app.get('/game-two', function(req, res) {
  res.render('game-two', { page: 'game2' });
});

app.get('/game-three', function(req, res) {
  res.render('game-three', { page: 'game3' });
});
  
app.post('/', function(req,res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const output=`
  <h3>Details</h3>
  <ul>
  <li>Name: ${name}</li>
  <li>Email: ${email}</li>
  <li>Message: ${message}</li>
  </ul>`;

  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
    type:"OAuth2",
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    clientId: process.env.EMAIL_ID,
    clientSecret: process.env.EMAIL_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    accessToken:accessToken
    }});

    const mailOpts = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject:'New Contact Request',
      html:output
    };

      smtpTrans.sendMail(mailOpts,(error,response)=>{
        if(error){
          console.log(error);
        }
        else{
          console.log("Message sent");
          res.redirect('/')
        }
        });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Server is listening on port 3000...');
});
