var express = require('express');
var router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', (req, res) => {
  res.json({ body: "Hello from the server"});
});

router.post('/contact', contactController.sendEmail);

module.exports = router;
