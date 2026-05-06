require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
app.use(express.json());

// Routes
const doctorsRoute = require('./routes/doctors');
const bookingsRoute = require('./routes/bookings');
const authRoute = require('./routes/auth');
const helloRoute = require('./routes/hello');

app.use('/api/doctors', doctorsRoute);
app.use('/api/bookings', bookingsRoute);
app.use('/api/auth', authRoute);
app.use('/api', helloRoute);

app.get('/', (req, res) => {
  res.json({ message: "MedRoam API is running 🚀", status: "ok" })
});

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
