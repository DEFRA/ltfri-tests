const RiskLevel = require('../../risk-level')

const data = [
  {
    premises: 'BEECH LODGE',
    postcode: 'DN19 7DJ',
    address: 100050180645,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.VeryLow,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: 'CORNER COTTAGE',
    postcode: 'DN19 7DJ',
    address: 100050180648,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: 'INVERMAY',
    postcode: 'DN19 7DJ',
    address: 100050180651,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: 'PARKVIEW HOUSE',
    postcode: 'DN19 7DJ',
    address: 100050180657,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: '8',
    postcode: 'IP33 1YH',
    address: 100091098209,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: 'KEEDALE',
    postcode: 'DN19 7DJ',
    address: 100050180652,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: '12',
    postcode: 'DN19 7DT',
    address: 100050180226,
    riverAndSeaRisk: RiskLevel.Medium,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: '17',
    postcode: 'DN19 7DT',
    address: 100050180230,
    riverAndSeaRisk: RiskLevel.Medium,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: false,
    isGroundwaterArea: true
  },
  {
    premises: 'PARK VIEW COTTAGE',
    postcode: 'DN19 7DJ',
    address: 100050180658,
    riverAndSeaRisk: RiskLevel.High,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: false,
    isGroundwaterArea: true
  }
  // { premises: '3',
  //   postcode: 'CB8 0HL',
  //   address: 100091369361,
  //   riverAndSeaRisk: RiskLevel.High,
  //   surfaceWaterRisk: RiskLevel.High,
  //   reservoirRisk: false }
]

module.exports = data
