const data = require('./data')
const searchTests = require('../../common/search')
const postcodeTests = require('../../common/postcode')
const englandOnlyTests = require('../../common/england-only')

module.exports = {
  'welsh-postcode': function (client) {
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
       * Create search page object
       */
      const searchPage = client.page.search()

      // Assert the correct postcode
      searchTests.assertPage(searchPage)

      // Select the first address and submit
      searchPage.setAddressAndSubmit(address)

      /**
       * Create search page object
       */
      const englandOnlyPage = client.page['england-only']()

      // Assert we get the correct message
      englandOnlyTests.assertMessage(englandOnlyPage)
    })

    // Close the window
    client.end()
  }
}
