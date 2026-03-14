const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

router.get('/', (req, res) => {
  res.send('Contacts API - Week 01');
});

module.exports = router;
