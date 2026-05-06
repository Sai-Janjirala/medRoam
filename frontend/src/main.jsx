import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './store/index';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 600 },
            success: { iconTheme: { primary: '#076249', secondary: '#fff' } },
          }}
        />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
