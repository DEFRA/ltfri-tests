// const RiskStatus = require('../risk-status')
// const RiskLevel = require('../risk-level')

module.exports = {
  loadPage: function (riskPage, addressId) {
    riskPage.loadPageWithAddress(addressId)
    // .assert.title('Your long term flood risk assessment - GOV.UK')
  },
  assertOutcome: function (riskPage, data) {
    riskPage.getInfo(function (info) {
      console.log('POSTCODE: ', data.postcode)
      riskPage.assert.equal(info.status, data.outcome)
      riskPage.assert.equal(info.riverAndSeaRisk, data.riverAndSeaRisk)
      riskPage.assert.equal(info.surfaceWaterRisk, data.surfaceWaterRisk)
      riskPage.assert.equal(info.reservoirRisk, data.reservoirRisk)

      console.log('HERE')
      const RiskDescriptions = {
        'Very Low': 'Very low risk - less than 0.1% chance each year',
        Low: 'Low risk - between 0.1% and 1% chance each year',
        Medium: 'Medium risk - between 1.1% and 3.3% chance each year',
        High: 'High risk - greater than 3.3% chance each year'
      }

      riskPage.assert.containsText('@surfaceWater', RiskDescriptions[info.surfaceWaterRisk])
      riskPage.assert.containsText('@riversSea', RiskDescriptions[info.riverAndSeaRisk])
      if (info.reservoirRisk) {
        riskPage.assert.containsText('@reservoir', 'There is a risk of flooding in this area from reservoirs - it is extremely unlikely')
      }

      if (info.isGroundwaterArea) {
        riskPage.assert.containsText('@groundwater', 'High groundwater levels may cause flooding in this area')
      }
      // TODO: Fix once content stable
      // Check the heading
      // if (info.status === RiskStatus.AtRisk) {
      //   if (info.surfaceWaterRisk !== RiskLevel.VeryLow) {
      //     riskPage.assert.containsText('@heading', 'This location is in or near a flood risk area')
      //     riskPage.assert.containsText('@lastItem', 'This location is in or near a flood risk area.')
      //   } else {
      //     riskPage.assert.containsText('@heading', 'This location is in a flood risk area')
      //     riskPage.assert.containsText('@lastItem', 'This location is in a flood risk area.')
      //   }
      //   riskPage.assert.containsText('@firstItem', 'This service is free. You can get warnings by phone, email or text message.')
      //   riskPage.assert.containsText('@lastItem', 'The flood risk from rivers or the sea is ' + data.riverAndSeaRisk.toLowerCase())
      //   riskPage.assert.containsText('@lastItem', 'The flood risk from surface water is ' + data.surfaceWaterRisk.toLowerCase())
      //   if (info.reservoirRisk) {
      //     riskPage.assert.containsText('@lastItem', 'There\'s a risk of flooding in this area from reservoirs')
      //   }
      // } else if (info.status === RiskStatus.AtRiskMonitor) {
      //   if (info.surfaceWaterRisk !== RiskLevel.VeryLow) {
      //     riskPage.assert.containsText('@heading', 'This location is in or near a flood risk area')
      //     riskPage.assert.containsText('@lastItem', 'This location is in or near a flood risk area.')
      //   } else {
      //     riskPage.assert.containsText('@heading', 'This location is in a flood risk area')
      //     riskPage.assert.containsText('@lastItem', 'This location is in a flood risk area.')
      //   }
      //   riskPage.assert.containsText('@firstItem', 'Use radio, television and social media to keep up to date with flood events and weather conditions in your area')
      //   riskPage.assert.containsText('@lastItem', 'The flood risk from rivers or the sea is ' + data.riverAndSeaRisk.toLowerCase())
      //   riskPage.assert.containsText('@lastItem', 'The flood risk from surface water is ' + data.surfaceWaterRisk.toLowerCase())
      //   if (info.reservoirRisk) {
      //     riskPage.assert.containsText('@lastItem', 'There\'s a risk of flooding in this area from reservoirs')
      //   }
      // } else if (info.status === RiskStatus.LowRisk) {
      //   riskPage.assert.containsText('@heading', 'This location is in an area at low risk of flooding')
      // } else if (info.status === RiskStatus.VeryLowRisk) {
      //   riskPage.assert.containsText('@heading', 'This location is in an area at very low risk of flooding')
      // }
    })
  },
  assertOutcomeGW: function (riskPage, data) {
    riskPage.getInfo(function (info) {
      console.log('POSTCODE: ', data.postcode)
      riskPage.assert.equal(info.status, data.outcome)
      riskPage.assert.equal(info.riverAndSeaRisk, data.riverAndSeaRisk)
      riskPage.assert.equal(info.surfaceWaterRisk, data.surfaceWaterRisk)
      riskPage.assert.equal(info.reservoirRisk, data.reservoirRisk)
      // TODO
      // if (info.surfaceWaterRisk !== RiskLevel.VeryLow) {
      //   riskPage.assert.containsText('@heading', 'This location is in or near a flood risk area')
      //   riskPage.assert.containsText('@lastItem', 'This location is in or near a flood risk area.')
      // } else {
      //   riskPage.assert.containsText('@heading', 'This location is in a flood risk area')
      //   riskPage.assert.containsText('@lastItem', 'This location is in a flood risk area.')
      // }
      // riskPage.assert.containsText('@firstItem', 'This service is free. You can get warnings by phone, email or text message.')
      // riskPage.assert.containsText('@lastItem', 'The flood risk from rivers or the sea is ' + data.riverAndSeaRisk.toLowerCase())
      // riskPage.assert.containsText('@lastItem', 'The flood risk from surface water is ' + data.surfaceWaterRisk.toLowerCase())
      // riskPage.assert.containsText('@groundwater', 'When groundwater levels are high there may be flooding and disruption in the local area.')
    })
  }
}
