var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET Hello World page. */
// router.get('/', function(req, res) {
//     res.render('index', { title: 'Hello, World!' });
// });

router.get('/', function(req, res) {

    res.sendFile(path.resolve('public/index.html'), { title: 'Hello, World!' });
});

// router.get('/awesome', function(req, res) {
//     res.render('awesome', { title: 'Hello, World!' });
// });

router.get('/awesome', function(req, res) {
  var question_list = ["How much do you like radio buttons?", "What is your favorite number?", "What is 2 x 3?", "What is the meaning of life?", "What?"]
    res.sendFile(path.resolve('public/awesome.html'), { questions: questions_list });
});

router.get('/great', function(req, res) {
    res.sendFile(path.resolve('public/great.html'), { title: 'Hello, World!' });
});

router.get('/ok', function(req, res) {
    res.sendFile(path.resolve('public/ok.html'), { title: 'Hello, World!' });
});

router.get('/mmmmh', function(req, res) {
    res.sendFile(path.resolve('public/mmmmh.html'), { title: 'Hello, World!' });
});

router.get('/oops', function(req, res) {
    res.sendFile(path.resolve('public/oops.html'), { title: 'Hello, World!' });
});


module.exports = router;
