var searchTests = require('../../common/search')

module.exports = {
  'no-selection': function (client) {
    /**
     * Create search page object
     */
    var searchPage = client.page.search()
    var postcodePage = client.page.postcode()

    // Navigate to the search page & submit
    searchPage.loadPageWithPostcode('WA14 1EP')

    // No Google reCaptcha token so return to postcode page
    searchTests.assertPage(postcodePage)

    // Close the window
    client.end()
  }
}
