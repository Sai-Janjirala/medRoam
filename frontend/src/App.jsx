import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy-loaded pages (code splitting)
const Landing = lazy(() => import('./pages/Landing/Landing'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Signup = lazy(() => import('./pages/Auth/Signup'));
const Search = lazy(() => import('./pages/Search/Search'));
const ProviderDetail = lazy(() => import('./pages/ProviderDetail/ProviderDetail'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Booking = lazy(() => import('./pages/Booking/Booking'));
const BookingSuccess = lazy(() => import('./pages/Booking/BookingSuccess'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-[#076249] border-t-transparent rounded-full animate-spin" />
      <p className="text-sm font-semibold text-gray-500">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/search" element={<Search />} />
              <Route path="/provider-detail/:id" element={<ProviderDetail />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="/booking-success" element={<BookingSuccess />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
