const data = require('./data')
const postcodeTests = require('../../common/postcode')
const searchTests = require('../../common/search')
const riskTests = require('../../common/risk')

module.exports = {
  groundwater: function (client) {
    // Loop over each postcode
    data.forEach(function (item) {
      const address = item.address
      const postcode = item.postcode

      /**
       * Create postcode page object
       */
      const postcodePage = client.page.postcode()

      // Navigate to the postcode page & submit postcode
      postcodeTests.loadPage(postcodePage)
      postcodePage.setPostcodeAndSubmit(postcode)

      /**
       * Create address page object
       */
      const searchPage = client.page.search()

      // // Assert the correct postcode
      searchTests.assertPage(searchPage)

      // Select the first address and submit
      searchPage.setAddressAndSubmit(address)

      /**
       * Create risk page object
       */
      const riskPage = client.page.risk()

      // Check outcome
      riskTests.assertOutcome(riskPage, item)
    })

    // Close the window
    client.end()
  }
}
