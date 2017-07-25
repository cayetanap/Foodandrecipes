var Nightmare = require('nightmare');

exports.getTitle = function() {
  return new Promise((resolve, reject) => {
    var nightmare = Nightmare({
      show: true
    });
    return nightmare
      .goto('http://food2fork.com/view/Perfect_Iced_Coffee/47024')
      .evaluate(function() {
        return document.querySelector('h1').innerText;
      })
      .end()
      .then(function(result) {
        return resolve(result);
      })
      .catch(function(error) {
        return reject('Search failed:', error);
      });;
  })
};

exports.getIngredients = function() {
  return new Promise((resolve, reject) => {
    var nightmare = Nightmare({
      show: true
    });
    return nightmare
      .goto('http://food2fork.com/view/Perfect_Iced_Coffee/47024')
      .evaluate(function() {
        return Array.from(document.querySelectorAll('.span5 ul li')).map(element => element.textContent);
      })
      .end()
      .then(function(result) {
        return resolve(result)
      })
      .catch(function(error) {
        return reject('Search failed:', error)
      });;
  });
}
