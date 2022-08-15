/**
 * class responsible for dealing with Map routines and methods
 */

const removeType = (data, type) => data.delete(type)

const deductValue = (data, value) => {
  data.forEach((e, key) => {
    data.set(key, e - value)
  })
}

const addRisk = (data, value, key) => {
  if(data.get(key) !== undefined){
    data.set(key, data.get(key) + value)
  } 
}

const deductRisk = (data, value, key) => {
  if(data.get(key)) data.set(key, data.get(key) - value)
} 

module.exports = {
  removeType,
  deductRisk,
  deductValue,
  addRisk
}