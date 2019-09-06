module.exports = {
  elements: {
    main: '#risk-page',
    section: '#risk-page .risk',
    heading: '#risk-page h1.govuk-heading-l',
    orderedList: '#risk-page ol.list-number',
    // firstItem: '#risk-page ol.list-number > li:first-child',
    // lastItem: '#risk-page ol.list-number > li:last-child',
    // detailLink: '#risk-page a[data-id="risk-detail"]',
    // groundwater: 'ol.list > li:nth-child(5) > div:nth-child(1) > p:nth-child(4)'
    surfaceWater: '#risk-page .surface-water .risk',
    riversSea: '#risk-page .rivers-sea .risk',
    reservoir: '#risk-page .groundwater-reservoirs .reservoir-risk',
    groundwater: '#risk-page .groundwater-reservoirs .groundwater-risk'
  },
  commands: [{
    getInfo: function (callback) {
      return this.waitForElementVisible('@main', 1000)
        .getAttribute('@main', 'data-test-info', function (result) {
          var info = JSON.parse(result.value)
          callback(info)
        })
    },
    loadPageWithAddress: function (addressId) {
      var url = this.api.launchUrl + '/risk?address=' + addressId
      return this.api.url(url)
    },
    gotoRiskDetail: function () {
      return this.waitForElementVisible('@detailLink', 1000)
        .click('@detailLink')
    }
  }]
}
