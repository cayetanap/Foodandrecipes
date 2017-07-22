const scrapping = new APIScrapping()

$(document).ready(function() {
  $('#update-recipes').click(function() {
    scrapping.updateRecipes()
  })
})
