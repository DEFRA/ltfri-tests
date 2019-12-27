module.exports = {
  loadPage: function (searchPage) {
    searchPage.navigate()
      .assert.title('Select an address - GOV.UK')
      .assert.containsText('@h1', 'Select an address')
      .assert.visible('@addressSelect')
  },
  assertErrorMessage: function (searchPage, errorMessage = 'Select an address') {
    searchPage.assert.containsText('@errorMessage', errorMessage)
  },
  assertPage: function (searchPage, resultCount) {
    searchPage.expect.element('@main').to.be.present.after(2000)

    if (typeof resultCount === 'number') {
      searchPage.assert.containsText('@defaultOption', `${resultCount} ${resultCount === 1 ? 'address' : 'addresses'} found`)
    }
  }
}
