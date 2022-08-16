const map = require('./MapUtils')
const ONE = 1
const INSURANCE = require('../../models/Insurance')

/**
 * class responsible for calculating individual info from available insurance types
 * based on user info
 */

const checkHouseStatus = (riskMap, houseStatus) => {
  if (houseStatus === 'mortgaged') {
    map.addRisk(riskMap, ONE, INSURANCE.HOME)
    map.addRisk(riskMap, ONE, INSURANCE.DISABILITY)
  }
}

const checkDependents = (riskMap, dependents) => {
  if (dependents) {
    map.addRisk(riskMap, ONE, INSURANCE.LIFE)
    map.addRisk(riskMap, ONE, INSURANCE.DISABILITY)
  }
}

const checkMaritalStatus = (riskMap, maritalStatus) => {
  if (maritalStatus === 'married') {
    map.addRisk(riskMap, ONE, INSURANCE.LIFE)
    map.deductRisk(riskMap, ONE, INSURANCE.DISABILITY)
  }
}

const today = new Date()
const checkVehicleStatus = (riskMap, vehicleYear) => {
  if (vehicleYear > (today.getFullYear() - 5)) map.addRisk(riskMap, ONE, INSURANCE.AUTO)
}

module.exports = {
  checkDependents,
  checkHouseStatus,
  checkMaritalStatus,
  checkVehicleStatus
}