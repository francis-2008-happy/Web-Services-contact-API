const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

router.get('/', (req, res) => {
  res.send('Contacts API - Week 02');
});

module.exports = router;
