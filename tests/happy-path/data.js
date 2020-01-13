const RiskLevel = require('../../risk-level')

const data = [
  // * Lines commented out do not currently have postcode to meet the test case permuatation//
  // ** Each permuatation duplicated with a view that reservoir flood risk may be added at later date//

  // At Risk Sign Up - High R&S Risk with variant SW Risk //

  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.High, reservoirRisk: true },
  {
    premises: 2,
    postcode: 'LE2 7QA',
    address: 2465055337,
    riverAndSeaRisk: RiskLevel.High,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: true
  },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  {
    premises: 101,
    postcode: 'LE4 5QD',
    address: 2465065006,
    riverAndSeaRisk: RiskLevel.High,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: false
  },
  //  { postcode: 'POSTCODE', address: XX2465065006,
  // riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  {
    premises: 65,
    postcode: 'LE4 7SG',
    address: 2465089742,
    riverAndSeaRisk: RiskLevel.High,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: false
  },
  //  { postcode: 'POSTCODE', address: XX,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: false },

  // Medium R&S Risk with variant SW Risk//
  {
    premises: 11,
    postcode: 'CV37 6YZ',
    address: 100070216073,
    riverAndSeaRisk: RiskLevel.Medium,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: true
  },
  //  { postcode: 'POSTCODE', address: 77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
  {
    premises: '20',
    postcode: 'LE3 5FD',
    address: 2465041934,
    riverAndSeaRisk: RiskLevel.Medium,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: true
  },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.Low, reservoirRisk: true },
  {
    premises: 'THE STABLES',
    postcode: 'NN6 8PH',
    address: 28025584,
    riverAndSeaRisk: RiskLevel.Medium,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: false
  },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: false },

  // Low R&S Risk with variant SW Risk//
  {
    premises: 7,
    postcode: 'SW18 1TJ',
    address: 121008673,
    riverAndSeaRisk: RiskLevel.Low,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: false
  },
  // { premises: 70,
  //   postcode: 'W6 0XL',
  //   address: 34002373,
  //   riverAndSeaRisk: RiskLevel.Low,
  //   surfaceWaterRisk: RiskLevel.High,
  //   reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: XX77079867,
  //  riverAndSeaRisk: RiskLevel.Low, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  {
    premises: 21,
    postcode: 'LE3 5JR',
    address: 2465038757,
    riverAndSeaRisk: RiskLevel.Low,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: false
  },
  {
    premises: 2,
    postcode: 'NN6 6JP',
    address: 28030078,
    riverAndSeaRisk: RiskLevel.Low,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: true
  },
  {
    premises: 21,
    postcode: 'SW13 0DS',
    address: 100022295693,
    riverAndSeaRisk: RiskLevel.Low,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: true
  },
  // { premises: 28,
  //   postcode: 'TW9 3BH',
  //   address: 100022308486,
  //   riverAndSeaRisk: RiskLevel.Low,
  //   surfaceWaterRisk: RiskLevel.VeryLow,
  //   reservoirRisk: true },
  // { premises: 'KELSON HOUSE',
  //   postcode: 'E14 3JL',
  //   address: 6080809,
  //   riverAndSeaRisk: RiskLevel.Low,
  //   surfaceWaterRisk: RiskLevel.VeryLow,
  //   reservoirRisk: false },

  // Very Low R&S Risk with variant SW Risk//
  {
    premises: '27A',
    postcode: 'S6 4JP',
    address: 100052100616,
    riverAndSeaRisk: RiskLevel.Medium,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: true
  },
  // { postcode: 'SS8 9RH', address: 100090372402,
  // riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: false },
  // { postcode: 'POSTCODE', address: 100090378533,
  // riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.Low, reservoirRisk: true },
  {
    premises: 42,
    postcode: 'SS8 7EH',
    address: 100090373928,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: false
  },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: XX,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: false },

  // At Risk Monitor - High R&S Risk with variant SW Risk //

  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.High, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.Low, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.Low, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: xx77079867,
  // riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: true },
  // { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: false },

  // Medium R&S Risk with variant SW Risk//
  {
    premises: 83,
    postcode: 'LE3 9RD',
    address: 2465041144, // Target area https://flood-warning-information.service.gov.uk/target-area/034WAF402 expanded February 2018
    riverAndSeaRisk: RiskLevel.Low,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: true
  },
  //  { postcode: 'POSTCODE', address: 77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  // { postcode: 'POSTCODE', address: xx77079867,
  // riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: false },
  // { postcode: 'POSTCODE', address: xx77079867,
  // riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.Low, reservoirRisk: true },
  {
    premises: 43,
    postcode: 'LE3 6AH',
    address: 2465040718,
    riverAndSeaRisk: RiskLevel.High,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: false
  },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: true },
  // { postcode: 'POSTCODE', address: xx77079867,
  // riverAndSeaRisk: RiskLevel.Medium, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: false },

  // Low R&S Risk with variant SW Risk//
  {
    premises: 73,
    postcode: 'LE3 9RD',
    address: 2465041139,
    riverAndSeaRisk: RiskLevel.Medium,
    surfaceWaterRisk: RiskLevel.High,
    reservoirRisk: true
  },
  //  { postcode: 'POSTCODE', address: xxx,
  //  riverAndSeaRisk: RiskLevel.Low, surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: XX77079867,
  //  riverAndSeaRisk: RiskLevel.Low, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  {
    premises: 3,
    postcode: 'NN6 6LE',
    address: 28015435,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: false
  },

  // Very Low R&S Risk with variant SW Risk//
  //  { postcode: 'POSTCODE', address: XX879331,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.High, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.Medium, reservoirRisk: true },
  {
    premises: 2,
    postcode: 'ME10 2PS',
    address: 100061090397,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.Medium,
    reservoirRisk: false
  },

  // Low Risk permuatations //
  //  { postcode: 'POSTCODE', address: XX33001217,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: XX33010458,
  //  riverAndSeaRisk: RiskLevel.Low, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: true },
  //  { postcode: 'POSTCODE', address: xx77079867,
  //  riverAndSeaRisk: RiskLevel.Low, surfaceWaterRisk: RiskLevel.VeryLow, reservoirRisk: false },
  //  { postcode: 'POSTCODE', address: XX200000879311,
  //  riverAndSeaRisk: RiskLevel.VeryLow, surfaceWaterRisk: RiskLevel.Low, reservoirRisk: true },
  {
    premises: 6,
    postcode: 'BS20 6BQ',
    address: 24063776,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: false
  },
  {
    premises: 12,
    postcode: 'LE4 9BH',
    address: 2465119536,
    riverAndSeaRisk: RiskLevel.Low,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: true
  },
  {
    premises: 'Bishops Court',
    postcode: 'DH1 2LY',
    address: 200003214998,
    riverAndSeaRisk: RiskLevel.Low,
    surfaceWaterRisk: RiskLevel.Low,
    reservoirRisk: false
  },

  // Very low risk //
  {
    premises: 'Kenyon',
    postcode: 'WA3 7ED',
    address: 200000977803,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.VeryLow,
    reservoirRisk: false
  },

  // Groundwater risk //
  {
    premises: 'BEECH LODGE',
    postcode: 'DN19 7DJ',
    address: 100050180645,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.VeryLow,
    reservoirRisk: false,
    isGroundwaterArea: true
  },

  // Very low risk - in TA but not GW (LTFRI-62)
  {
    premises: '10',
    postcode: 'S41 0FH',
    address: 74060107,
    outcome: RiskStatus.VeryLowRisk,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.VeryLow,
    reservoirRisk: true
  },
  // Very low risk - in a GW TA (LTFRI-62)
  {
    premises: 'BEECH LODGE',
    postcode: 'DN19 7DJ',
    address: 100050180645,
    outcome: RiskStatus.AtRisk,
    riverAndSeaRisk: RiskLevel.VeryLow,
    surfaceWaterRisk: RiskLevel.VeryLow,
    reservoirRisk: false
  }
]

module.exports = data
