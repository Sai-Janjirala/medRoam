import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import {
  Calendar,
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  Phone,
  Search,
  Share2,
  ShieldPlus,
  UserCircle
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#076249] selection:text-white">
      <SEO title="Home" description="Discover and book medical roaming specialists anywhere in the world with MedRoam." />
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="font-bold text-2xl tracking-tight text-gray-900">Med<span className="text-[#076249]">Roam</span></div>
        <div className="hidden md:flex space-x-10 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-[#076249] transition-colors">Helpline</a>
          <a href="#" className="hover:text-[#076249] transition-colors">Providers</a>
        </div>
        <div className="flex items-center space-x-6 text-sm font-semibold">
          <Link to="/login" className="text-gray-600 hover:text-[#076249] transition-colors">Login</Link>
          <Link to="/dashboard" className="bg-[#076249] text-white px-5 py-2.5 rounded-lg hover:bg-[#064f3a] transition-all hover:shadow-lg hover:-translate-y-0.5">Sign Up</Link>
          <button className="text-gray-400 hover:text-[#076249] transition-colors hidden sm:block">
            <UserCircle size={24} />
          </button>
        </div>
      </nav>

      <section className="relative py-32 px-8 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-teal-50 to-white rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-50 to-white rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4 pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-[4rem] font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Get Medical Help Anywhere
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Reliable roaming healthcare and medical logistics across 48 cities. Connect with verified providers in your language, instantly.
          </p>

          <div className="bg-white p-2 md:p-3 rounded-2xl shadow-xl shadow-teal-900/5 border border-gray-100 flex flex-col md:flex-row max-w-3xl">
            <div className="flex-1 flex items-center px-4 py-4 md:py-3 border-b md:border-b-0 md:border-r border-gray-100">
              <MapPin className="text-gray-400 mr-3" size={20} />
              <input type="text" placeholder="Enter your city" className="w-full focus:outline-none text-gray-700 font-medium placeholder:text-gray-400 placeholder:font-normal" />
            </div>
            <div className="flex-1 flex items-center px-4 py-4 md:py-3">
              <span className="text-gray-400 mr-3 text-xl font-serif italic">A文</span>
              <div className="flex-1 flex justify-between items-center cursor-pointer group">
                <span className="text-gray-500 group-hover:text-gray-800 transition-colors">Preferred Language</span>
                <ChevronDown className="text-gray-400 group-hover:text-gray-600 transition-colors" size={16} />
              </div>
            </div>
            <button className="bg-[#076249] text-white px-8 py-4 md:py-3 rounded-xl font-semibold hover:bg-[#064f3a] transition-colors m-2 md:m-0 shadow-md">
              Find Help
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#2a2f2e] text-white py-12 px-8 flex flex-col md:flex-row justify-center md:justify-around items-center space-y-10 md:space-y-0 text-center tracking-wider font-semibold text-xs md:text-sm">
        <div className="flex flex-col items-center">
          <span className="text-[#3edfae] text-4xl font-extrabold block mb-2">2,400+</span>
          <span className="text-gray-400 uppercase tracking-[0.2em]">Verified Providers</span>
        </div>
        <div className="hidden md:block w-px h-16 bg-gray-700"></div>
        <div className="flex flex-col items-center">
          <span className="text-[#3edfae] text-4xl font-extrabold block mb-2">48 Cities</span>
          <span className="text-gray-400 uppercase tracking-[0.2em]">Network Coverage</span>
        </div>
        <div className="hidden md:block w-px h-16 bg-gray-700"></div>
        <div className="flex flex-col items-center">
          <span className="text-[#3edfae] text-4xl font-extrabold block mb-2">24/7</span>
          <span className="text-gray-400 uppercase tracking-[0.2em]">Emergency Helpline</span>
        </div>
      </section>

      <section className="py-28 px-8 max-w-7xl mx-auto text-center relative">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-5 tracking-tight">How It Works</h2>
        <p className="text-gray-500 mb-20 text-lg max-w-2xl mx-auto">Three simple steps to access world-class healthcare on the move.</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left flex flex-col justify-between h-full group">
            <div className="absolute -bottom-6 -right-4 text-[150px] leading-none font-bold text-gray-50/80 z-0 select-none group-hover:text-teal-50 transition-colors duration-300">1</div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <Search className="text-[#076249]" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Find Provider</h3>
              <p className="text-gray-500 leading-relaxed">Search by location and language to find a verified clinic or roaming medic near you.</p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left flex flex-col justify-between h-full group">
            <div className="absolute -bottom-6 -right-4 text-[150px] leading-none font-bold text-gray-50/80 z-0 select-none group-hover:text-teal-50 transition-colors duration-300">2</div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <Calendar className="text-[#076249]" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Book Instantly</h3>
              <p className="text-gray-500 leading-relaxed">Confirm your appointment or request immediate logistics support through our secure platform.</p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left flex flex-col justify-between h-full group">
            <div className="absolute -bottom-6 -right-4 text-[150px] leading-none font-bold text-gray-50/80 z-0 select-none group-hover:text-teal-50 transition-colors duration-300">3</div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <ShieldPlus className="text-[#076249]" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Receive Care</h3>
              <p className="text-gray-500 leading-relaxed">Get professional medical attention with transparent pricing and direct billing options.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto bg-gray-50/50 rounded-[40px] mb-32 border border-gray-100/50 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 px-4">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Featured Cities</h2>
            <p className="text-gray-500 text-lg">Our most active medical hubs across India.</p>
          </div>
          <a href="#" className="text-[#076249] font-bold mt-4 md:mt-0 hover:text-[#064f3a] transition-colors flex items-center">
            View All Cities <span className="ml-2 text-xl leading-none">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=600&q=80" alt="Mumbai" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase mb-2">Maharashtra</p>
              <h3 className="text-3xl font-bold tracking-tight">Mumbai</h3>
            </div>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80" alt="Delhi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase mb-2">NCR</p>
              <h3 className="text-3xl font-bold tracking-tight">Delhi</h3>
            </div>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80" alt="Goa" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase mb-2">Goa</p>
              <h3 className="text-3xl font-bold tracking-tight">Goa</h3>
            </div>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80" alt="Jaipur" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase mb-2">Rajasthan</p>
              <h3 className="text-3xl font-bold tracking-tight">Jaipur</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#076249] to-[#0bc08e] py-20 px-10 mx-auto max-w-7xl rounded-[40px] mb-20 text-white flex flex-col md:flex-row justify-between items-center overflow-hidden relative shadow-2xl shadow-teal-900/20">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-black/5 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        
        <div className="max-w-2xl relative z-10 mb-10 md:mb-0 md:mr-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Need Emergency Help?</h2>
          <p className="text-teal-50 text-lg md:text-xl opacity-90 leading-relaxed font-medium">
            Our emergency medical dispatchers are standing by 24/7 to coordinate immediate assistance and transport in any covered city.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 relative z-10 w-full md:w-auto shrink-0">
          <button className="bg-white text-[#076249] px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl">
            <Phone size={22} className="mr-3" />
            1800-MED-ROAM
          </button>
          <button className="border-2 border-white/40 hover:bg-white hover:text-[#076249] text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all backdrop-blur-sm">
            Find Nearby Hospital
          </button>
        </div>
      </section>

      <footer className="bg-white pt-20 pb-10 px-8 border-t border-gray-100 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="font-bold text-3xl tracking-tight text-gray-900 mb-6">Med<span className="text-[#076249]">Roam</span></div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mb-8">
              Bridging the gap between travel and healthcare with precision logistics and a network of world-class medical providers.
            </p>
            <div className="flex space-x-5 text-gray-400">
              <a href="#" className="hover:text-[#076249] bg-gray-50 hover:bg-teal-50 p-3 rounded-full transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-[#076249] bg-gray-50 hover:bg-teal-50 p-3 rounded-full transition-colors"><Share2 size={20} /></a>
              <a href="#" className="hover:text-[#076249] bg-gray-50 hover:bg-teal-50 p-3 rounded-full transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest">Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-[#076249] transition-colors inline-block hover:translate-x-1 transform duration-200">Resources</a></li>
              <li><a href="#" className="hover:text-[#076249] transition-colors inline-block hover:translate-x-1 transform duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-[#076249] transition-colors inline-block hover:translate-x-1 transform duration-200">Legal</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest">Policies</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-[#076249] transition-colors inline-block hover:translate-x-1 transform duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#076249] transition-colors inline-block hover:translate-x-1 transform duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium">
        </div>
      </footer>
    </div>
  );
};

export default Landing;
