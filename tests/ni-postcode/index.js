const data = require('./data')
const postcodeTests = require('../../common/postcode')
const englandOnlyTests = require('../../common/england-only')

module.exports = {
  'ni-postcode': function (client) {
    // Loop over each postcode
    data.forEach(function (item) {
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
      const englandOnlyPage = client.page['england-only']()

      // Assert we get the correct regional message
      englandOnlyTests.assertMessage(englandOnlyPage, 'Northern Ireland')
    })

    // Close the window
    client.end()
  }
}
