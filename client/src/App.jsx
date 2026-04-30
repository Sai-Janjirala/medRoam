import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Search from './pages/Search/Search';
import ProviderDetail from './pages/ProviderDetail/ProviderDetail';
import Dashboard from './pages/Dashboard/Dashboard';
import Booking from './pages/Booking/Booking';
import BookingSuccess from './pages/Booking/BookingSuccess';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/provider-detail/:id" element={<ProviderDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
