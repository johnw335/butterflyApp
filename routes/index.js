var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET Hello World page. */
router.get('/', function(req, res) {
    res.render('./public/index.html', { title: 'Hello, World!' });
});

router.get('/awesome', function(req, res) {
    res.render('./public/awesome.html', { title: 'Hello, World!' });
});


module.exports = router;
