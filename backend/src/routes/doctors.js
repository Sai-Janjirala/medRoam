const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const getDoctors = () => {
  const filePath = path.join(__dirname, '../../../client/src/utils/doctors.js');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const arrayString = fileContent.substring(fileContent.indexOf('['), fileContent.lastIndexOf(']') + 1);
  return new Function('return ' + arrayString)();
};

router.get('/', (req, res) => {
  try {
    const doctors = getDoctors();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const doctors = getDoctors();
    const doctor = doctors.find(d => d.id.toString() === req.params.id || d._id?.toString() === req.params.id);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
