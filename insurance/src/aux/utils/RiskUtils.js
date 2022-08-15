const map = require('./MapUtils')
const INSURANCE = require('../../models/Insurance')

/** 
 * class responsible for validating info of riskMap
*/

const allowedInsurances = (riskMap, body) => {
  const { age, income, vehicle, house } = body

  if(isOver60(age)) {
    map.removeType(riskMap, INSURANCE.DISABILITY)
    map.removeType(riskMap, INSURANCE.LIFE)
  }
  /* 
    this part got a little ambiguous for me in the exercise, i'm not sure if the user dosn't
    have 1 of the propperty i shoudl remove'em all, or do it partial as i did
  */
  if(hasNoIncome(income)) map.removeType(riskMap, INSURANCE.DISABILITY)
  if(!vehicle.year) map.removeType(riskMap, INSURANCE.AUTO)
  if(!house.ownership_status) map.removeType(riskMap, INSURANCE.HOME)
}

const initRiskMap = (riskMap ,questions) => {
  const basicScore = questions.reduce((accumulator, value) => accumulator + value)
  riskMap.set(INSURANCE.LIFE, basicScore)
  riskMap.set(INSURANCE.DISABILITY, basicScore)
  riskMap.set(INSURANCE.HOME, basicScore)
  riskMap.set(INSURANCE.AUTO, basicScore)
}

const isOver60 = (age) => age > 60
const hasNoIncome = (income) => income === 0

module.exports = {
  allowedInsurances,
  initRiskMap
}