var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('BirdsTime:', Date.now())
  next()
})

// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});

// handler for the /:id path, which renders a special page
router.get('/admin', (req, res, next) => {
  // console.log(req.params.id)
  res.sendStatus(401); // Unauthorized
})

module.exports = router;
