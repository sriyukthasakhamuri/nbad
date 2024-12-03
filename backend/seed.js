require('dotenv').config();
const mongoose = require('mongoose');
const EnergyData = require('./models/EnergyData');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');

    // Sample data
    const energyData = [
      { type: 'consumption', year: 2018, solar: 450, wind: 600 },
      { type: 'consumption', year: 2019, solar: 580, wind: 720 },
      { type: 'consumption', year: 2020, solar: 720, wind: 850 },
      { type: 'consumption', year: 2021, solar: 900, wind: 1020 },
      { type: 'consumption', year: 2022, solar: 1150, wind: 1250 },
      { type: 'investment', technology: 'Solar PV', investment: 180 },
      { type: 'investment', technology: 'Wind Power', investment: 170 },
      { type: 'investment', technology: 'Hydrogen', investment: 70 },
      { type: 'investment', technology: 'Energy Storage', investment: 90 },
      { type: 'investment', technology: 'Grid Infrastructure', investment: 110 },
    ];

    await EnergyData.deleteMany(); // Clear existing data
    await EnergyData.insertMany(energyData); // Insert new data
    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();