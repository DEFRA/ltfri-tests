module.exports = {
  elements: {
    main: '#risk-page',
    section: '#risk-page .risk',
    heading: '#risk-page h1.govuk-heading-l',
    orderedList: '#risk-page ol.list-number',
    surfaceWater: '#risk-page .surface-water .risk',
    riversSea: '#risk-page .rivers-sea .risk',
    reservoir: '#risk-page .reservoirs .risk',
    groundwater: '#risk-page .groundwater .risk',
    surfaceWaterDesc: '#risk-page .surface-water .risk-description',
    surfaceWaterDetailsSummary: '#risk-page .surface-water summary',
    riversSeaDesc: '#risk-page .rivers-sea .risk-description',
    riversSeaDetailsSummary: '#risk-page .rivers-sea summary'
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
    openSWDetails: function () {
      return this.click('@surfaceWaterDetailsSummary')
        .waitForElementVisible('@surfaceWaterDesc', 1000)
    },
    openRSDetails: function () {
      return this.click('@riversSeaDetailsSummary')
        .waitForElementVisible('@riversSeaDesc', 1000)
    }
  }]
}
