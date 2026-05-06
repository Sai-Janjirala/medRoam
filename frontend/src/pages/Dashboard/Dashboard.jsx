import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BASE_URL from '../../utils/api';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  UserCircle,
  Plus,
  ChevronRight,
  UploadCloud,
  Info
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockBookings = JSON.parse(localStorage.getItem('mockBookings') || '[]');

    fetch(`${BASE_URL}/api/bookings`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        setBookings(Array.isArray(data) && data.length > 0 ? data : mockBookings);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Failed to fetch bookings, using mock data", err);
        setBookings(mockBookings);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800 flex flex-col md:flex-row selection:bg-[#076249] selection:text-white">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0 sticky top-0 h-screen overflow-y-auto hidden md:flex">
        <div>
          <div className="p-6 pb-8">
            <Link to="/" className="font-bold text-2xl tracking-tight text-gray-900">
              Med<span className="text-[#076249]">Roam</span>
            </Link>
          </div>
          <nav className="px-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-[#076249] text-white rounded-lg font-semibold shadow-sm transition-all">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-semibold transition-all">
              <Calendar size={20} />
              <span>Bookings</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-semibold transition-all">
              <FileText size={20} />
              <span>Medical Records</span>
            </a>
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-2">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <UserCircle size={24} />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 leading-tight">Julian Rossi</p>
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mt-0.5">Premium Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto h-screen">
        
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <Link to="/" className="font-bold text-2xl tracking-tight text-gray-900">
            Med<span className="text-[#076249]">Roam</span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <UserCircle size={20} />
          </div>
        </div>

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Julian</h1>
            <p className="text-gray-500 font-medium">
              Your medical roaming status is currently <span className="text-[#076249] font-bold">Active</span> in Lisbon.
            </p>
          </div>
          <button 
            onClick={() => navigate('/search')}
            className="bg-[#076249] text-white px-5 py-2.5 rounded-lg font-semibold flex items-center hover:bg-[#064f3a] transition-all shadow-sm"
          >
            New Appointment
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Appointments</h2>
              <a href="#" className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-[#076249]">View All</a>
            </div>
            
            <div className="space-y-4">
              {loading ? (
                <div className="text-gray-500 font-medium p-4">Loading appointments...</div>
              ) : bookings.length === 0 ? (
                <div className="text-gray-500 font-medium p-4">No upcoming appointments. Book one today!</div>
              ) : (
                bookings.map((booking) => (
                  <div key={booking.id} className="bg-[#f8fafc] border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-md bg-[#e6f4f0] text-[#076249] flex items-center justify-center shrink-0">
                        <Plus size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">Doctor #{booking.doctorId} Consultation</h3>
                        <p className="text-xs text-gray-500 font-medium mt-0.5">Patient: {booking.patientFirstName} {booking.patientLastName}</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-bold text-gray-900 text-sm">{booking.date}</p>
                      <p className="text-[#076249] text-xs font-bold mt-0.5">{booking.time}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Saved Providers */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Saved Providers</h2>
            <div className="flex-1 space-y-5">
              <div className="flex justify-between items-center group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80" alt="Provider" className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Dr. Marcus Webb</h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">Cardiologist • London</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1594824436998-d467946927d7?w=100&q=80" alt="Provider" className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Dr. Sarah Chen</h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">General Practitioner • Berlin</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
            </div>
            <button 
              onClick={() => navigate('/search')}
              className="mt-6 w-full py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Find More Providers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Profile Settings */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" defaultValue="Julian Rossi" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249] focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" defaultValue="julian.rossi@traveler.com" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249] focus:border-transparent transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Blood Type</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#076249] focus:border-transparent transition-all bg-white">
                    <option>O Positive</option>
                    <option>O Negative</option>
                    <option>A Positive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Insurance ID</label>
                  <input type="text" defaultValue="MR-99201-B" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249] focus:border-transparent transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* Identity Verification */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Identity Verification</h2>
            
            <div className="flex-1 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center p-8 text-center mb-4 transition-colors hover:bg-gray-100 hover:border-gray-400">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-[#076249]">
                <UploadCloud size={24} />
              </div>
              <p className="font-bold text-gray-900 text-sm mb-1">Upload Identity Document</p>
              <p className="text-xs text-gray-500 font-medium mb-4">Drag and drop your passport<br/>or ID card here</p>
              <button className="text-[#076249] text-xs font-bold uppercase tracking-wider hover:underline">
                Browse Files
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-3 flex items-start space-x-3">
              <Info size={16} className="text-gray-500 shrink-0 mt-0.5" />
              <p className="text-xs font-medium text-gray-600">Verification usually takes less than 2 hours.</p>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="font-bold text-sm tracking-tight text-gray-900 mb-1">MedRoam Logistics</div>
            <p className="text-[10px] font-medium text-gray-500">© 2024 MedRoam Logistics. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 text-[10px] font-bold text-gray-500">
            <a href="#" className="hover:text-[#076249] transition-colors">Resources</a>
            <a href="#" className="hover:text-[#076249] transition-colors">Legal</a>
            <a href="#" className="hover:text-[#076249] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#076249] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#076249] transition-colors">Contact</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Dashboard;
