var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('**** Fetching resource*****');
  res.send('respond with a resource');
});

router.get('/bad', function(req, res, next) {
    console.log('**** Bad request URL hit *****');
    res.status(400).send('respond with a bad request');
});

module.exports = router;
