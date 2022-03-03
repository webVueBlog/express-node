var express = require('express');
var router = express.Router();

/* post put delete */
router.get('/', function(req, res, next) {
  res.send('Hello test!');
});

module.exports = router;
