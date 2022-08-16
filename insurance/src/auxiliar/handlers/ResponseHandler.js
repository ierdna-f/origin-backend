const PLANS = require("../../models/Plans.js")
const availableTypes = [ 'auto', 'disability', 'home', 'life' ]

/**
 * this handler is responsible for manipulating the return data from all the calculators
 * and build a response with it.
 */
const handle = (riskMap) => {
  console.log(riskMap)
  let response = {}
  for( let type of availableTypes) {
    response[type] = checkValue(riskMap.get(type))
  }
 return response
}

const checkValue = (value) => {
  if(value == undefined) return PLANS.INELIGIBLE
  if(value <= 0) return PLANS.ECONOMIC
  if(value >= 3) return PLANS.RESPONSIBLE
  return PLANS.REGULAR
}

module.exports = {
  handle
}