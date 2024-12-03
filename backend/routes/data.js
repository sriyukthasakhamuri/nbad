const express = require('express');
const router = express.Router();
const { getEnergyConsumption, getRenewableGrowth } = require('../controllers/dataController');
const auth = require('../middleware/auth');

router.get('/energy-consumption', auth, getEnergyConsumption);
router.get('/renewable-growth', auth, getRenewableGrowth);

module.exports = router;