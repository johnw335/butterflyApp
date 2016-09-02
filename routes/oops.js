var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('oops', { title: 'Hello, World!' });
});

module.exports = router;