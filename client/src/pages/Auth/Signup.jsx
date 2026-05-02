import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, HelpCircle, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    await register(name, email, password);
    toast.success('Account created successfully!');
    navigate('/dashboard');
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-sm text-gray-500">Join our secure medical logistics portal</p>
          </div>

          <form className="space-y-6" onSubmit={handleSignup}>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#076249] focus:border-[#076249] sm:text-sm transition-colors outline-none"
                  placeholder="Dr. Jane Doe"
                  required
                />
              </div>
            </div>

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
              <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">Password</label>
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

            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#076249] focus:border-[#076249] sm:text-sm transition-colors tracking-widest outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#076249] hover:bg-[#064f3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#076249] transition-colors"
            >
              Sign Up <span className="ml-2 font-bold">→</span>
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#076249] hover:text-[#064f3a] transition-colors">
              Log In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
