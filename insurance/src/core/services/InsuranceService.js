const evaluator = require('../evaluators/RiskEvaluator')
const responseHandler = require('../../aux/handlers/ResponseHandler')

const createRiskProfile = (body) => responseHandler.handle(evaluator.evaluate(body))

module.exports = {
  createRiskProfile
}