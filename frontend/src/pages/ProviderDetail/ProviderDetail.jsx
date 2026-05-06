import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doctors as mockDoctors } from '../../utils/doctors';
import {
  MapPin,
  Star,
  UserCircle,
  Calendar,
  Phone,
  CheckCircle,
  ShieldCheck,
  Globe,
  Mail,
} from 'lucide-react';

const ProviderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    if (!apiUrl) {
      console.warn("VITE_API_URL is empty, using mock data.");
      const fallbackDoc = mockDoctors.find(d => d.id === parseInt(id));
      setDoc(fallbackDoc || null);
      setLoading(false);
      return;
    }

    fetch(`${apiUrl}/api/doctors/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        setDoc(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Backend fetch failed, using mock data.", err);
        const fallbackDoc = mockDoctors.find(d => d.id === parseInt(id));
        setDoc(fallbackDoc || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-gray-500">Loading Provider Details...</div>;
  if (!doc) return <div className="min-h-screen flex items-center justify-center font-bold text-red-500">Provider not found</div>;

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
      <main className="max-w-5xl mx-auto px-6 py-8">
        
        {/* Top Profile Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 w-full md:w-auto">
            <div className="relative shrink-0">
              <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                <div className="bg-[#076249] text-white rounded-full p-1">
                   <ShieldCheck size={14} />
                </div>
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{doc.name}</h1>
                <span className="bg-[#076249] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider leading-none">
                  {doc.availableNow ? 'Active Now' : 'Offline'}
                </span>
              </div>
              <p className="text-gray-500 font-medium mb-3 text-sm">{doc.specialty}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs font-semibold">
                <div className="flex items-center text-gray-900">
                  <Star size={14} className="text-[#076249] fill-[#076249] mr-1.5" />
                  {doc.rating} <span className="text-gray-400 font-normal ml-1">({doc.reviews} Reviews)</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center text-gray-500">
                  <MapPin size={14} className="mr-1.5 text-gray-400" />
                  {doc.location}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 w-full md:w-48 shrink-0 mt-4 md:mt-0">
            <button 
              onClick={() => navigate(`/booking/${doc.id}`)}
              className="bg-[#076249] text-white px-4 py-3 rounded-md font-semibold text-sm flex items-center justify-center hover:bg-[#064f3a] transition-all shadow-sm hover:shadow-md"
            >
              <Calendar size={16} className="mr-2 opacity-90" />
              Book Appointment
            </button>
            <button className="bg-white text-red-600 border border-red-200 px-4 py-3 rounded-md font-semibold text-sm flex items-center justify-center hover:bg-red-50 transition-all shadow-sm hover:shadow-md">
              <Phone size={16} className="mr-2 opacity-90" />
              Call Helpline
            </button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Available Slots */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-end border-b border-gray-900 pb-2 mb-6">
                <h2 className="font-bold text-gray-500 text-[10px] tracking-widest uppercase">Available Slots</h2>
                <span className="text-gray-500 text-xs font-bold">May 14 - May 20, 2024</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { day: 'MON', time: '09:00', active: false },
                  { day: 'TUE', time: '11:30', active: true },
                  { day: 'WED', time: '14:15', active: false },
                  { day: 'THU', time: '16:45', active: false },
                ].map((slot, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => {
                      if(slot.active) navigate(`/booking/${doc.id}`);
                    }}
                    className={`border flex flex-col items-center justify-center py-5 rounded-md cursor-pointer transition-all ${slot.active ? 'bg-[#6ae0b6] border-[#6ae0b6] text-gray-900 shadow-md transform -translate-y-0.5' : 'bg-white border-gray-200 text-gray-800 hover:border-[#6ae0b6] hover:shadow-sm'}`}
                  >
                    <span className={`text-[11px] font-bold tracking-wider mb-1 ${slot.active ? 'text-gray-800' : 'text-gray-400'}`}>{slot.day}</span>
                    <span className="text-2xl font-bold tracking-tight">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Pricing */}
            <div className="bg-[#f2f4f6] border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-5 border-b border-gray-200 bg-[#f2f4f6]">
                <h2 className="font-bold text-lg text-gray-900">Service Pricing</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left bg-white min-w-[400px]">
                  <thead>
                    <tr className="border-b border-gray-900">
                      <th className="px-6 py-3 text-[10px] font-bold text-gray-900 tracking-widest uppercase">Service Type</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-gray-900 tracking-widest uppercase">Duration</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-gray-900 tracking-widest uppercase text-right">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-semibold text-sm">
                    <tr>
                      <td className="px-6 py-4 text-gray-900">Standard Consultation</td>
                      <td className="px-6 py-4 text-gray-500 font-medium">30 mins</td>
                      <td className="px-6 py-4 text-[#076249] text-right font-bold text-base">$120.00</td>
                    </tr>
                    <tr className="bg-red-50/20">
                      <td className="px-6 py-4 text-red-600 font-bold">Emergency Rapid Response</td>
                      <td className="px-6 py-4 text-gray-500 font-medium">Immediate</td>
                      <td className="px-6 py-4 text-red-600 text-right font-bold text-base">$350.00</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900">Routine Follow-up</td>
                      <td className="px-6 py-4 text-gray-500 font-medium">15 mins</td>
                      <td className="px-6 py-4 text-[#076249] text-right font-bold text-base">$75.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Professional Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm border-t-[3px] border-t-[#076249]">
              <h2 className="font-bold text-[#076249] text-[10px] tracking-widest uppercase mb-4">Professional Summary</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#076249] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Board Certified</h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">Internal Medicine & Logistics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#076249] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{doc.experience}</h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">Former Head of Metro Trauma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h2 className="font-bold text-lg text-gray-900">Reviews</h2>
                <a href="#" className="text-[#076249] font-bold text-[11px] uppercase tracking-wider hover:underline">View All</a>
              </div>
              
              <div className="space-y-5 divide-y divide-gray-100">
                <div className="pt-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <h3 className="font-bold text-gray-900 text-sm">Sarah K.</h3>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-[#076249] fill-[#076249] ml-0.5" />)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mb-2.5 leading-relaxed">"Dr. Vane arrived within 20 minutes for our emergency. Incredibly professional and calm during a crisis."</p>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">2 Days Ago</span>
                </div>

                <div className="pt-5">
                  <div className="flex justify-between items-center mb-1.5">
                    <h3 className="font-bold text-gray-900 text-sm">Michael R.</h3>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-[#076249] fill-[#076249] ml-0.5" />)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mb-2.5 leading-relaxed">"Excellent follow-up care. He took the time to explain everything clearly."</p>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">1 Week Ago</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-10 px-8 border-t border-gray-200 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="font-bold text-lg tracking-tight text-gray-900 mb-2">Med<span className="text-[#076249]">Roam</span> Logistics</div>
          <p className="text-gray-500 text-xs max-w-sm leading-relaxed mb-4">
            Empowering healthcare professionals through mobile efficiency and roaming logistics excellence.
          </p>
          <div className="flex items-center space-x-4 text-gray-400 mb-6 md:mb-2">
            <Globe size={16} className="cursor-pointer hover:text-[#076249] transition-colors" />
            <Mail size={16} className="cursor-pointer hover:text-[#076249] transition-colors" />
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex flex-wrap gap-3 sm:gap-5 text-[11px] font-bold text-gray-500">
            <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Resources</a>
            <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Legal</a>
            <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Privacy Policy</a>
            <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Terms of Service</a>
            <a href="#" className="hover:text-[#076249] transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-[#076249]">Contact</a>
          </div>
          <p className="text-gray-400 text-[10px] mt-2">© 2024 MedRoam Logistics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProviderDetail;
