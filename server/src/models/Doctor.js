const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  specialty: String,
  rating: String,
  reviews: String,
  location: String,
  experience: String,
  availableNow: Boolean,
  price: String,
  image: String,
  about: String
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
