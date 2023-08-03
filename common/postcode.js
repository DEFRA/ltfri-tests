module.exports = {
  loadPage: function (postcodePage) {
    postcodePage.navigate()
      .assert.title('Where do you want to check? - Check your long term flood risk - GOV.UK')
      .assert.containsText('@h1', 'Where do you want to check?')
      .assert.visible('@postcodeText')
  },
  assertErrorMessage: function (postcodePage, errorMessage = 'Enter a full postcode in England') {
    postcodePage.assert.containsText('@errorMessage', errorMessage)
  }
}
