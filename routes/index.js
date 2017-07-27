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

// router.get('/update-recipes', function(req, res, next) {
//   var a = getTitle('http://food2fork.com/view/Perfect_Iced_Coffee/47024');
//   var b = getIngredients('http://food2fork.com/view/Perfect_Iced_Coffee/47024');
//   return Promise.all([a, b]).then(function(results) {
//       res.render('update-recipes', {
//         title: results[0],
//         ingredients: results[1]
//       })
//     })
//     .catch(error => console.log(error));
// });


router.get('/update-recipes/:url1/:url2', function(req, res, next) {
  var url = 'http://food2fork.com/view/' + req.params.url1 + '/' + req.params.url2;
  var a = getTitle(url);
  var b = getIngredients(url);
  return Promise.all([a, b]).then(function(results) {
      res.render('update-recipes', {
        title: results[0],
        ingredients: results[1]
      })
    })
    .catch(error => console.log(error));
});

module.exports = router;
