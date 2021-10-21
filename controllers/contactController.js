const nodemailer = require('nodemailer');
const { google } = require("googleapis");
require('dotenv').config();
/*
// gmail api authentication setup
const OAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
OAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH
});

// get current access token
const accessToken = OAuth2Client.getAccessToken();
  
// transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.USER_ID,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH,
    accessToken
  }
});
*/

exports.sendEmail = (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.USER_ID,
      pass: process.env.PASSWORD
    }
  });
  
  transporter.verify((err, success) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  
  const email = {
    from: req.body.email,
    to: 'romainyvernes@gmail.com',
    subject: 'New message from portfolio website',
    text: `Message from ${req.body.name} ${req.body.email}: ${req.body.message}`
  };

  transporter.sendMail(email, (err, data) => {
    if (err) {
      res.json({ msg: 'Failed' });
    } else {
      res.json({ msg: 'Success' });
    }
  });
};