const searchTests = require('../../common/search')

module.exports = {
  'no-selection': function (client) {
    /**
     * Create search page object
     */
    const searchPage = client.page.search()
    const postcodePage = client.page.postcode()

    postcodePage.establishSession()

    // Navigate to the search page & submit
    searchPage.loadPageWithPostcode('WA14 1EP')
    searchPage.submit()

    // Assert we get the default error message
    searchTests.assertErrorMessage(searchPage)
    // Close the window
    client.end()
  }
}
