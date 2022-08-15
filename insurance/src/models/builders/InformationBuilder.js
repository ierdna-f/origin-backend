const calculator = require('../../aux/utils/CalculationUtils')
const map = require('../../aux/utils/MapUtils')

/**
  in this particular class the idea is to divide in 2 main info types
  primary are the types where i will change all the values in available insurance types
  and secondary is for individual changes on the available insurance types
 */
const build = (riskMap, body) => {
  primaryInfo(riskMap, body.age, body.income)
  secondaryInfo(riskMap, body)
}

const primaryInfo = (riskMap, age, income) => {
  if(age < 30) map.deductValue(riskMap, 2)
  if(age >= 30 && age <= 40) map.deductValue(riskMap, 1)
  if(income > 200000)  map.deductValue(riskMap, 1)
}

const secondaryInfo = (riskMap, body) => {
  const { marital_status, dependents, vehicle, house } = body

  calculator.checkHouseStatus(riskMap, house.ownership_status)
  calculator.checkDependents(riskMap, dependents)
  calculator.checkMaritalStatus(riskMap, marital_status)
  calculator.checkVehicleStatus(riskMap, vehicle.year)
}

module.exports = {
  build
}