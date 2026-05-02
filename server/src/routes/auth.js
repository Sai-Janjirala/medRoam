const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({
    success: true,
    token: "fake-token-123",
    user: { name: "Test User", email: "test@test.com" }
  });
});

router.post('/login', (req, res) => {
  res.json({
    success: true,
    token: "fake-token-123",
    user: { name: "Test User", email: "test@test.com" }
  });
});

module.exports = router;
