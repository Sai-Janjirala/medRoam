require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const helloRoute = require('./routes/hello');
app.use('/api', helloRoute);

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
