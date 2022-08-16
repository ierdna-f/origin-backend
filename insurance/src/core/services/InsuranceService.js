const evaluator = require('../evaluators/RiskEvaluator')
const responseHandler = require('../../auxiliar/handlers/ResponseHandler')

const createRiskProfile = (body) => responseHandler.handle(evaluator.evaluate(body))

module.exports = {
  createRiskProfile
}