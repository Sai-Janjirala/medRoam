const store = require('../data/store');

const signup = (req, res) => {
  const { email, password } = req.body;
  
  if (store.users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { id: store.users.length + 1, email, password };
  store.users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: { id: newUser.id, email: newUser.email } });
};

const login = (req, res) => {
  const { email, password } = req.body;
  
  const user = store.users.find(u => u.email === email && u.password === password);
  if (!user) {
    if (store.users.length === 0) {
       store.users.push({ id: 1, email, password });
       return res.json({ message: 'Login successful (Auto-created)', user: { id: 1, email } });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
};

module.exports = {
  signup,
  login
};
