module.exports = {
  assertMessage: function (englandOnlyPage, region) {
    englandOnlyPage.expect.element('@main').to.be.present.after(2000)
    englandOnlyPage.expect.element('@heading').to.contain.text('This service is for postcodes in England only')
    if (region) {
      englandOnlyPage.assert.containsText('@main', 'The postcode you entered is in Northern Ireland.')
    }
  }
}
