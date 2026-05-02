require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Doctor = require('./models/Doctor');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await connectDB();
    
    const count = await Doctor.countDocuments();
    if (count === 0) {
      const filePath = path.join(__dirname, '../../client/src/utils/doctors.js');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      const arrayString = fileContent.substring(fileContent.indexOf('['), fileContent.lastIndexOf(']') + 1);
      const doctors = new Function('return ' + arrayString)();
      
      await Doctor.insertMany(doctors);
      console.log(`Data Imported! Inserted ${doctors.length} doctors.`);
    } else {
      console.log('Doctors collection is not empty, skipping seed.');
    }
    
    await mongoose.disconnect();
    console.log('MongoDB Disconnected.');
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
