import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BASE_URL from '../../utils/api';
import { doctors as mockDoctors } from '../../utils/doctors';
import {
  MapPin,
  Briefcase,
  Star,
  ChevronDown,
  UserCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Search = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/doctors`)
      .then(res => {
        if (!res.ok) throw new Error('API failed');
        return res.json();
      })
      .then(data => {
        setDoctors(data && data.length > 0 ? data : mockDoctors);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Backend fetch failed, using mock data.", err);
        setDoctors(mockDoctors);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800 selection:bg-[#076249] selection:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-10">
          <Link to="/" className="font-bold text-2xl tracking-tight text-gray-900">
            Med<span className="text-[#076249]">Roam</span>
          </Link>
          <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-[#076249] transition-colors">Helpline</a>
            <a href="#" className="text-[#076249] border-b-2 border-[#076249] pb-1">Providers</a>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm font-semibold">
          <Link to="/login" className="text-gray-600 hover:text-[#076249] transition-colors">Login</Link>
          <Link to="/login" className="bg-[#076249] text-white px-5 py-2.5 rounded-lg hover:bg-[#064f3a] transition-all hover:shadow-lg hover:-translate-y-0.5">Sign Up</Link>
          <button className="text-gray-400 hover:text-[#076249] transition-colors hidden sm:block">
            <UserCircle size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg text-gray-900">Filters</h2>
              <button className="text-[#076249] text-sm font-semibold hover:underline">Clear all</button>
            </div>

            {/* City */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">City</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#076249] text-sm font-medium">
                  <option>San Francisco, CA</option>
                  <option>Austin, TX</option>
                  <option>New York, NY</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            {/* Specialty */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Specialty</label>
              <div className="space-y-3">
                {[
                  { name: 'Cardiology', checked: true },
                  { name: 'Dermatology', checked: false },
                  { name: 'General Practice', checked: false },
                  { name: 'Pediatrics', checked: false }
                ].map((spec, idx) => (
                  <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      defaultChecked={spec.checked}
                      className="w-4 h-4 text-[#076249] bg-white border-gray-300 rounded focus:ring-[#076249] accent-[#076249] cursor-pointer" 
                    />
                    <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{spec.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Price Range (USD)</label>
              <div className="relative h-1 bg-gray-200 rounded-full mb-4">
                <div className="absolute left-[20%] right-[30%] h-full bg-[#076249] rounded-full"></div>
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#076249] rounded-full shadow border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#076249] rounded-full shadow border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>$50</span>
                <span>$500+</span>
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Availability</label>
              <div className="flex flex-wrap gap-2">
                <button className="bg-[#076249] text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-[#064f3a] transition-colors">Available Now</button>
                <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors">Tomorrow</button>
                <button className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors">This Week</button>
              </div>
            </div>

          </div>
        </aside>

        {/* Search Results List */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {loading ? "Loading Specialists..." : `${doctors.length} Specialists found`}
            </h1>
            <div className="flex items-center text-sm">
              <span className="text-gray-500 mr-2">Sorting by:</span>
              <span className="font-semibold text-gray-900 cursor-pointer flex items-center hover:text-[#076249] transition-colors">
                Recommended
                <ChevronDown size={14} className="ml-1 text-gray-500" />
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {doctors.map((doc) => (
              <div 
                key={doc.id} 
                onClick={() => navigate(`/provider-detail/${doc.id}`)}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
              >
                {/* Doctor Image */}
                <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Doctor Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                      <p className="text-[#076249] font-bold text-xs tracking-wider uppercase mb-3">{doc.specialty}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-3 sm:gap-6 mb-4">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1.5 text-gray-400" />
                          <span>{doc.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-1.5 text-gray-400" />
                          <span>{doc.experience}</span>
                        </div>
                        {doc.availableNow && (
                          <div className="bg-[#e6f4f0] text-[#076249] px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center w-max">
                            <span className="w-1.5 h-1.5 bg-[#076249] rounded-full mr-1.5"></span>
                            Available Now
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-[#f8fafc] border border-gray-100 rounded-lg px-2.5 py-1 flex items-center shadow-sm">
                      <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="font-bold text-gray-900 text-sm mr-1">{doc.rating}</span>
                      <span className="text-xs text-gray-500">({doc.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Consultation Starting At</p>
                      <p className="text-2xl font-bold text-gray-900 leading-none">{doc.price}</p>
                    </div>
                    <button className="bg-[#076249] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#064f3a] transition-all flex items-center shadow-sm hover:shadow-md">
                      Book Appointment <span className="ml-2 font-light">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center space-x-1">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-[#076249] text-white font-semibold text-sm shadow-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">3</button>
              <span className="w-8 h-8 flex items-center justify-center text-gray-400 text-sm">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">8</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-10 px-8 border-t border-gray-200 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="font-bold text-lg tracking-tight text-gray-900 mb-2">Med<span className="text-[#076249]">Roam</span> Logistics</div>
          <p className="text-gray-500 text-xs max-w-sm leading-relaxed mb-4">
            Revolutionizing medical logistics and roaming healthcare with high-efficiency provider matching and real-time transit tracking.
          </p>
          <p className="text-gray-400 text-xs">© 2024 MedRoam Logistics. All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
          <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Resources</a>
          <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Legal</a>
          <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Privacy Policy</a>
          <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Terms of Service</a>
          <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Search;
