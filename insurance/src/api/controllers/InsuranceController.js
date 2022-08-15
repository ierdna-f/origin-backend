const service = require('../../core/services/InsuranceService');
const BAD_REQUEST = {'Bad Request': 'no body found'}

const verify = (req, res) => {
  
  if(Object.keys(req.body).length == 0) {
    return res.status(400).json(BAD_REQUEST)
  }
  res.status(200).json(service.createRiskProfile(req.body))

}

module.exports = {
  riskVerify: verify
}