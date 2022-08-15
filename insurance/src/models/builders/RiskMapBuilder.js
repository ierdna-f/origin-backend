const utils = require('../../aux/utils/RiskUtils')

/**
* This build creates the riskMap which is in my idea the map of 
* available insurance types and scores based on risk_questions and user information
*/
const build = (body) => {
  let riskMap = new Map()
  utils.initRiskMap(riskMap, body.risk_questions)
  utils.allowedInsurances(riskMap, body)
  return riskMap
}

module.exports = {
  build
}