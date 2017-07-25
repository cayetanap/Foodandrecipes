var express = require('express');
var router = express.Router();
var {
  getTitle,
  getIngredients
} = require("../lib/nightmare")



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Find your recipe'
  });
});

router.get('/update-recipes', function(req, res, next) {
  var a = getTitle();
  var b = getIngredients();
  return Promise.all([a, b]).then(function(results) {
      res.render('update-recipes', {
        title: results[0],
        ingredients: results[1]
      })
    })
    .catch(error => console.log(error));
});

module.exports = router;
