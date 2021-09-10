const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// transporter setup
const transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.USER,
    clientId: process.env.ID,
    clientSecret: process.env.SECRET,
    refreshToken: process.env.REFRESH,
    accessToken: process.env.ACCESS
  }
};
const transporter = nodemailer.createTransport(transport);
transporter.verify((err, success) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Server is ready to take messages');
  }
});

exports.sendEmail = (req, res, next) => {
  const email = {
    from: `${req.body.name} ${req.body.email}`,
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