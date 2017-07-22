var express = require('express');
var router = express.Router();
var {
  getTitle
} = require("../lib/nightmare")



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Find your recipe'
  });
});

router.get('/update-recipes', function(req, res, next) {
  getTitle().then(function(scrapping) {
    res.send(scrapping)
  }).catch(error => console.log(error));
});

module.exports = router;
