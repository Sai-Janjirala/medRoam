import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Search from './pages/Search/Search';
import ProviderDetail from './pages/ProviderDetail/ProviderDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/provider-detail" element={<ProviderDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
