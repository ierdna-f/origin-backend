const InsuranceController = require('../controllers/InsuranceController');
const { Router } = require('express');
const router = Router();

/**
 * router to map endpoints that could be used
 */
router.post('/risk-verify', InsuranceController.riskVerify)

module.exports = router