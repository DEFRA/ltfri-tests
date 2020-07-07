// const RiskStatus = require('../risk-status')
// const RiskLevel = require('../risk-level')

module.exports = {
  loadPage: function (riskPage, assertTitle = true) {
    const result = riskPage.loadPage()

    if (assertTitle) {
      result.assert.title('Your long term flood risk assessment - GOV.UK')
    }
  },
  assertOutcome: function (riskPage, data) {
    riskPage.getInfo(function (info) {
      console.log('PREMISES: ', data.premises)
      console.log('POSTCODE: ', data.postcode)
      riskPage.assert.equal(info.riverAndSeaRisk, data.riverAndSeaRisk)
      riskPage.assert.equal(info.surfaceWaterRisk, data.surfaceWaterRisk)
      riskPage.assert.equal(info.reservoirRisk, data.reservoirRisk)
      riskPage.assert.equal(info.isGroundwaterArea, !!data.isGroundwaterArea)

      const RiskTitles = {
        'Very Low': 'Very low risk',
        Low: 'Low risk',
        Medium: 'Medium risk',
        High: 'High risk'
      }

      const RiskDescriptions = {
        'Very Low': 'Very low risk means that each year this area has a chance of flooding of less than 0.1%',
        Low: 'Low risk means that each year this area has a chance of flooding of between 0.1% and 1%',
        Medium: 'Medium risk means that each year this area has a chance of flooding of between 1% and 3.3%',
        High: 'High risk means that each year this area has a chance of flooding of greater than 3.3%'
      }

      riskPage.assert.containsText('@surfaceWater', RiskTitles[info.surfaceWaterRisk])

      riskPage.openSWDetails()
      riskPage.openRSDetails()

      riskPage.assert.containsText('@surfaceWaterDesc', RiskDescriptions[info.surfaceWaterRisk])
      riskPage.assert.containsText('@riversSea', RiskTitles[info.riverAndSeaRisk])
      riskPage.assert.containsText('@riversSeaDesc', RiskDescriptions[info.riverAndSeaRisk])
      if (info.reservoirRisk) {
        riskPage.assert.containsText('@reservoir', 'There is a risk of flooding from reservoirs in this area')
      }

      if (info.isGroundwaterArea) {
        riskPage.assert.containsText('@groundwater', 'Flooding is possible in the local area when groundwater levels are high')
      }
    })
  }
}
