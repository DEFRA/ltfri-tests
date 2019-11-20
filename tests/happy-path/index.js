var data = require('./data')
var postcodeTests = require('../../common/postcode')
var searchTests = require('../../common/search')
var riskTests = require('../../common/risk')

module.exports = {
  'happy-path': function (client) {
    // Loop over each test case
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
       * Create risk page object
       */
      var riskPage = client.page.risk()

      // Check outcome
      riskTests.assertOutcome(riskPage, item)
    })

    // Close the window
    client.end()
  }
}
