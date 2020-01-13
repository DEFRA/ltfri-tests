var data = require('./data')
var postcodeTests = require('../../common/postcode')
var searchTests = require('../../common/search')

module.exports = {
  'valid-search': function (client) {
    // Loop over each test case
    data.forEach(function (item) {
      var postcode = item.postcode
      var expectedResultCount = item.expectedResultCount

      /**
       * Create postcode page object
       */
      var postcodePage = client.page.postcode()

      // Navigate to the postcode page & submit postcode
      postcodeTests.loadPage(postcodePage)
      postcodePage.setPostcodeAndSubmit(postcode)

      /**
       * Create search page object
       */
      var searchPage = client.page.search()

      // Assert the correct search page is displayed
      searchTests.assertPage(searchPage, expectedResultCount)
    })

    // Close the window
    client.end()
  }
}
