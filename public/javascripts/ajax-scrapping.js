class APIScrapping {
  constructor() {

  }
  handleResponse(res) {
    console.log("Todo ok - " + res)
  }
  handleError(err) {
    console.log("NOT OK")

  }

  updateRecipes() {
    $.ajax({
      type: 'GET',
      url: '/update-recipes',
      success: this.handleResponse,
      error: this.handleError
    });
  }
}
