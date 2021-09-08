var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ body: "Hello from the server"});
});

router.post('/contact', (req, res, next) => {
  res.send('To implement');
});

router.get('/contact', (req, res) => {
  res.json({ body: "Hello from the server"});
});

module.exports = router;
