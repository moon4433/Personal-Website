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
const OAuth2 = google.auth.OAuth2

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

const oauth2Client = new OAuth2(
'260393057932-eprfaf865lq469jjiaajht0382cgk2lo.apps.googleusercontent.com',
'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',
"https://developers.google.com/oauthplayground");
oauth2Client.setCredentials({refresh_token:'1//04iGjolFX7Mq3CgYIARAAGAQSNgF-L9IrL18uG2bZvIqlnb-tgQtmvmkjEeMvxB9xGy0KdZ0o6QMUfQVL_TbMT3ihJnzvuCWUOA'});
const accessToken = oauth2Client.getAccessToken();

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
    user:'formemailkeeganrjohnson@gmail.com',
    pass: '1Q39cvb0',
    clientId:'260393057932-eprfaf865lq469jjiaajht0382cgk2lo.apps.googleusercontent.com',
    clientSecret:'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',
    refreshToken:'1//04iGjolFX7Mq3CgYIARAAGAQSNgF-L9IrL18uG2bZvIqlnb-tgQtmvmkjEeMvxB9xGy0KdZ0o6QMUfQVL_TbMT3ihJnzvuCWUOA',
    accessToken:accessToken
    }});

    const mailOpts = {
      from:'formemailkeeganrjohnson@gmail.com',
      to:'keeganjohnson43@gmail.com',
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
