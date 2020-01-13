var data = require('./data')
var postcodeTests = require('../../common/postcode')
var searchTests = require('../../common/search')
var englandOnlyTests = require('../../common/england-only')

module.exports = {
  'scottish-postcode': function (client) {
    // Loop over each postcode
    data.forEach(function (item) {
      var address = item.address
      var postcode = item.postcode

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

      // Assert the correct postcode
      searchTests.assertPage(searchPage)

      // Select the first address and submit
      searchPage.setAddressAndSubmit(address)

      /**
       * Create search page object
       */
      var englandOnlyPage = client.page['england-only']()

      // Assert we get the correct message
      englandOnlyTests.assertMessage(englandOnlyPage)
    })

    // Close the window
    client.end()
  }
}
