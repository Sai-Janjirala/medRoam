const store = require('../data/store');

const getAllBookings = (req, res) => {
  res.json(store.bookings);
};

const createBooking = (req, res) => {
  const { doctorId, date, time, patientFirstName, patientLastName, patientEmail, amount } = req.body;
  
  const newBooking = {
    id: store.bookings.length + 1,
    doctorId,
    date,
    time,
    patientFirstName,
    patientLastName,
    patientEmail,
    amount,
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };

  store.bookings.push(newBooking);
  res.status(201).json(newBooking);
};

const cancelBooking = (req, res) => {
  const bookingIndex = store.bookings.findIndex(b => b.id === parseInt(req.params.id));
  if (bookingIndex === -1) return res.status(404).json({ message: 'Booking not found' });
  
  store.bookings.splice(bookingIndex, 1);
  res.json({ message: 'Booking cancelled successfully' });
};

module.exports = {
  getAllBookings,
  createBooking,
  cancelBooking
};
