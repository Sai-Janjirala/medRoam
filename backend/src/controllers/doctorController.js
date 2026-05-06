const store = require('../data/store');

const getAllDoctors = (req, res) => {
  res.json(store.doctors);
};

const getDoctorById = (req, res) => {
  const doctor = store.doctors.find(d => d.id === parseInt(req.params.id));
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
};

module.exports = {
  getAllDoctors,
  getDoctorById
};
