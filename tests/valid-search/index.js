const data = require('./data')
const postcodeTests = require('../../common/postcode')
const searchTests = require('../../common/search')

module.exports = {
  'valid-search': function (client) {
    // Loop over each test case
    data.forEach(function (item) {
      const postcode = item.postcode
      const expectedResultCount = item.expectedResultCount

      /**
       * Create postcode page object
       */
      const postcodePage = client.page.postcode()

      // Navigate to the postcode page & submit postcode
      postcodeTests.loadPage(postcodePage)
      postcodePage.setPostcodeAndSubmit(postcode)

      /**
       * Create search page object
       */
      const searchPage = client.page.search()

      // Assert the correct search page is displayed
      searchTests.assertPage(searchPage, expectedResultCount)
    })

    // Close the window
    client.end()
  }
}
