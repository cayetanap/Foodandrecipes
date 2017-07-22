var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: true
});

exports.getTitle = function() {
  return new Promise((resolve, reject) => {
    nightmare
      .goto('http://food2fork.com/view/Perfect_Iced_Coffee/47024')
      .evaluate(function() {
        return document.querySelector('h1').innerText;
      })
      .end()
      .then(function(result) {
        resolve(result);
      })
      .catch(function(error) {
        reject('Search failed:', error);
      });;
  })
};

function getIngredients() {
  nightmare
    .goto('http://food2fork.com/view/Perfect_Iced_Coffee/47024')

    .evaluate(function() {
      return Array.from(document.querySelectorAll('.span5 ul li')).map(element => element.textContent);
    })
    .end()
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error) {
      console.error('Search failed:', error);
    });;
};
