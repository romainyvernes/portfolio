const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

// email server authentication setup
const OAuthClient = new OAuth2(
  process.env.ID,
  process.env.SECRET,
  process.env.REDIRECT
);
OAuthClient.setCredentials({
  refresh_token: process.env.REFRESH
});

exports.sendEmail = async (req, res, next) => {
  // obtain new token to access email server
  const accessToken = await OAuthClient.getAccessToken();

  // transporter setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'romainyvernesdev@gmail.com',
      pass: 'Developer21@'
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
    text: req.body.message
  };

  transporter.sendMail(email, (err, data) => {
    if (err) {
      res.json({ msg: 'Failed' });
    } else {
      res.json({ msg: 'Success' });
    }
  });
};