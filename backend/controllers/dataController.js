const EnergyData = require('../models/EnergyData');

exports.getEnergyConsumption = async (req, res) => {
  try {
    const data = await EnergyData.find({ type: 'consumption' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching energy consumption data' });
  }
};

exports.getRenewableGrowth = async (req, res) => {
  try {
    const data = await EnergyData.find({ type: 'investment' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching renewable growth data' });
  }
};