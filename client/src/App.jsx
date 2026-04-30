import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import api from './utils/api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/hello')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <HelmetProvider>
      <div>
        <h1>Hello World</h1>
        {message && <p>Backend says: {message}</p>}
      </div>
    </HelmetProvider>
  );
}

export default App;
