const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Data Store
let doctors = [
  {
    id: 1,
    name: "Dr. Marcus Thorne",
    specialty: "SENIOR CARDIOLOGIST",
    rating: "4.9",
    reviews: "128",
    location: "MedCenter, SF",
    experience: "15+ Yrs Exp",
    availableNow: true,
    price: "$180.00",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    about: "Dr. Marcus Thorne is a board-certified cardiologist specializing in preventive cardiology and heart failure. He has over 15 years of experience treating complex cardiovascular conditions."
  },
  {
    id: 2,
    name: "Dr. Elena Rodriguez",
    specialty: "PEDIATRIC SPECIALIST",
    rating: "5.0",
    reviews: "242",
    location: "Children's Health, Austin",
    experience: "8+ Yrs Exp",
    availableNow: true,
    price: "$145.00",
    image: "https://images.unsplash.com/photo-1594824436998-d467946927d7?w=400&q=80",
    about: "Dr. Elena Rodriguez is dedicated to providing comprehensive pediatric care from newborns to adolescents. Her gentle approach ensures children feel comfortable and safe during visits."
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    specialty: "DERMATOLOGIST",
    rating: "4.8",
    reviews: "86",
    location: "Skin Institute, NYC",
    experience: "12+ Yrs Exp",
    availableNow: true,
    price: "$210.00",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    about: "Dr. James Wilson is a renowned dermatologist focusing on medical, surgical, and cosmetic dermatology. He is highly skilled in treating a wide array of skin conditions and developing personalized skincare regimens."
  }
];

let bookings = [];
let users = [];

// =======================
// DOCTORS API
// =======================

// Get all doctors
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

// Get doctor by ID
app.get('/api/doctors/:id', (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
});

// =======================
// BOOKINGS API
// =======================

// Get all bookings
app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

// Create a new booking
app.post('/api/bookings', (req, res) => {
  const { doctorId, date, time, patientFirstName, patientLastName, patientEmail, amount } = req.body;
  
  const newBooking = {
    id: bookings.length + 1,
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

  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

// Cancel a booking
app.delete('/api/bookings/:id', (req, res) => {
  const bookingIndex = bookings.findIndex(b => b.id === parseInt(req.params.id));
  if (bookingIndex === -1) return res.status(404).json({ message: 'Booking not found' });
  
  bookings.splice(bookingIndex, 1);
  res.json({ message: 'Booking cancelled successfully' });
});

// =======================
// AUTH API (MOCK)
// =======================

app.post('/api/auth/signup', (req, res) => {
  const { email, password } = req.body;
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: { id: newUser.id, email: newUser.email } });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    // For a mock, we'll just allow any login if the user array is empty to keep testing easy,
    // or strictly require signup. Let's do a loose mock where if they don't exist, we just auto-create them
    // to match the previous seamless flow, OR strictly check.
    // Given the prompt "mock auth endpoints", let's just return success for any email/password 
    // unless they specifically want strict validation. Let's do loose validation:
    if (users.length === 0) {
       users.push({ id: 1, email, password });
       return res.json({ message: 'Login successful (Auto-created)', user: { id: 1, email } });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
