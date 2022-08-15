const riskMapBuilder = require('../../models/builders/RiskMapBuilder')
const infoBuilder = require('../../models/builders/InformationBuilder')
const responseHandler = require('../../aux/handlers/ResponseHandler')

/*
  this methods handle all the information and build all necessary tolls 
  to calculate the output of the types insurance
*/
const evaluate = (body) => {
  const riskMap = riskMapBuilder.build(body)
  infoBuilder.build(riskMap, body)
  return riskMap
}

module.exports = {
  evaluate
}