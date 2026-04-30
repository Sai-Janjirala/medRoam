import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, HelpCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../../utils/api';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(res => {
      if(!res.ok) throw new Error('Invalid credentials');
      return res.json();
    })
    .then(data => {
      navigate('/dashboard');
    })
    .catch(err => {
      setError(err.message);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-radial bg-medroam-bg flex flex-col relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full border-[40px] border-gray-50/50 opacity-50 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full border-[20px] border-gray-50/50 opacity-50 pointer-events-none"></div>

      <header className="w-full flex justify-between items-center px-8 py-6 bg-white shadow-sm z-10 border-b border-gray-100">
        <div className="font-bold text-xl tracking-[0.2em] text-gray-900">MEDROAM</div>
        <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <HelpCircle size={16} />
          <span>Support</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-[440px] bg-white rounded-xl shadow-2xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-sm text-gray-500">Access your secure medical logistics portal</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
              {error && <p className="text-red-500 text-sm font-semibold text-center">{error}</p>}

              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">Professional Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#076249] focus:border-[#076249] sm:text-sm transition-colors outline-none"
                    placeholder="name@medroam.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">Security Key</label>
                  <a href="#" className="text-xs font-medium text-[#076249] hover:text-[#064f3a] transition-colors">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#076249] focus:border-[#076249] sm:text-sm transition-colors tracking-widest outline-none"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#076249] focus:ring-[#076249] border-gray-300 rounded accent-[#076249]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                Stay signed in for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#076249] hover:bg-[#064f3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#076249] transition-colors"
            >
              Sign In <span className="ml-2 font-bold">→</span>
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-400 tracking-widest uppercase font-bold text-[10px]">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.365 14.384c-.015-3.033 2.502-4.498 2.613-4.571-1.41-2.062-3.6-2.358-4.382-2.383-1.85-.187-3.616 1.088-4.558 1.088-.94 0-2.408-1.054-3.957-1.028-2.02.027-3.882 1.176-4.919 2.977-2.099 3.639-.537 9.022 1.503 11.968 1.002 1.449 2.184 3.1 3.754 3.045 1.508-.057 2.079-.974 3.905-.974 1.82 0 2.339.974 3.931.942 1.637-.028 2.646-1.479 3.631-2.923 1.139-1.662 1.606-3.275 1.633-3.359-.036-.015-3.123-1.198-3.154-4.782zM14.992 4.145c.833-1.007 1.393-2.407 1.24-3.805-1.194.048-2.653.795-3.513 1.834-.77.922-1.443 2.355-1.258 3.722 1.33.103 2.697-.743 3.531-1.751z" />
                </svg>
                Apple
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/dashboard" className="font-semibold text-[#076249] hover:text-[#064f3a] transition-colors">
              Sign Up
            </Link>
          </p>
        </div>


      </main>

    </div>
  );
};

export default Login;
