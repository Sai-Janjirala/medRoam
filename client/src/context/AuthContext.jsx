import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setUser({ name: "Test User", email: "test@test.com", token });
    } else {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, [token]);

  const login = async (email, password) => {
    const fakeToken = 'fake-token-123';
    setToken(fakeToken);
    setUser({ name: "Test User", email: "test@test.com" });
    return { success: true };
  };

  const register = async (name, email, password) => {
    const fakeToken = 'fake-token-123';
    setToken(fakeToken);
    setUser({ name: "Test User", email: "test@test.com" });
    return { success: true };
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
