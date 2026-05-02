import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = (email, password) => {
    const fakeToken = 'fake-token-123';
    const fakeUser = { name: 'Test User', email: 'test@test.com' };
    
    localStorage.setItem('token', fakeToken);
    localStorage.setItem('user', JSON.stringify(fakeUser));
    
    setToken(fakeToken);
    setUser(fakeUser);
  };

  const register = (name, email, password) => {
    const fakeToken = 'fake-token-123';
    const fakeUser = { name: 'Test User', email: 'test@test.com' };
    
    localStorage.setItem('token', fakeToken);
    localStorage.setItem('user', JSON.stringify(fakeUser));
    
    setToken(fakeToken);
    setUser(fakeUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
