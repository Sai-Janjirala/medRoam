import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doctors as mockDoctors } from '../../utils/doctors';
import { ChevronLeft, Calendar, Clock, CreditCard, ShieldCheck, MapPin } from 'lucide-react';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [selectedDate, setSelectedDate] = useState('May 14, 2024');
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  
  const [firstName, setFirstName] = useState('Julian');
  const [lastName, setLastName] = useState('Rossi');
  const [email, setEmail] = useState('julian.rossi@traveler.com');

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

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!doc) return;
    
    const bookingData = {
      doctorId: doc.id,
      date: selectedDate,
      time: selectedTime,
      patientFirstName: firstName,
      patientLastName: lastName,
      patientEmail: email,
      amount: (parseFloat(doc.price.replace('$', '')) + 5).toFixed(2)
    };

    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      const existingBookings = JSON.parse(localStorage.getItem('mockBookings') || '[]');
      existingBookings.push({ ...bookingData, id: Date.now() });
      localStorage.setItem('mockBookings', JSON.stringify(existingBookings));
      navigate('/booking-success');
      return;
    }

    fetch(`${apiUrl}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    })
    .then(res => res.json())
    .then(() => {
      navigate('/booking-success');
    })
    .catch(err => {
      console.warn("Error creating booking, continuing mock flow", err);
      const existingBookings = JSON.parse(localStorage.getItem('mockBookings') || '[]');
      existingBookings.push({ ...bookingData, id: Date.now() });
      localStorage.setItem('mockBookings', JSON.stringify(existingBookings));
      navigate('/booking-success');
    });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-gray-500">Loading Booking Details...</div>;
  if (!doc) return <div className="min-h-screen flex items-center justify-center font-bold text-red-500">Provider not found</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 text-gray-500 hover:text-gray-900 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="font-bold text-xl tracking-[0.2em] text-gray-900">MED<span className="text-[#076249]">ROAM</span></div>
        </div>
        <div className="text-sm font-semibold text-gray-500">Secure Checkout</div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Booking Form */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Confirm Appointment Details</h2>
            
            <form onSubmit={handleConfirm} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249] appearance-none bg-white"
                    >
                      <option>May 14, 2024</option>
                      <option>May 15, 2024</option>
                      <option>May 16, 2024</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249] appearance-none bg-white"
                    >
                      <option>09:00 AM</option>
                      <option>11:30 AM</option>
                      <option>02:15 PM</option>
                      <option>04:45 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Patient Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249]" />
                  <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249]" />
                  <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#076249] sm:col-span-2" />
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="mr-2 text-gray-400" size={18} /> Payment Method
                </h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-6 bg-blue-600 rounded text-white flex items-center justify-center text-[10px] font-bold italic">VISA</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-xs text-gray-500 font-medium">Expires 12/26</p>
                    </div>
                  </div>
                  <button type="button" className="text-[#076249] text-xs font-bold hover:underline">Edit</button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#076249] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#064f3a] transition-all shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Confirm & Pay
                <ShieldCheck size={20} className="ml-2 opacity-80" />
              </button>
              <p className="text-center text-[10px] text-gray-400 font-medium mt-3 flex justify-center items-center">
                <ShieldCheck size={12} className="mr-1" /> Payments are secure and encrypted
              </p>
            </form>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="md:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Order Summary</h2>
            
            <div className="flex items-center space-x-4 mb-6">
              <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{doc.name}</h3>
                <p className="text-xs text-[#076249] font-bold uppercase mt-0.5">{doc.specialty}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <MapPin size={12} className="mr-1" /> {doc.location}
                </div>
              </div>
            </div>

            <hr className="border-gray-100 my-4" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Standard Consultation</span>
                <span>{doc.price}</span>
              </div>
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Platform Fee</span>
                <span>$5.00</span>
              </div>
              <hr className="border-gray-100 my-3" />
              <div className="flex justify-between font-bold text-gray-900 text-lg">
                <span>Total</span>
                <span className="text-[#076249]">${(parseFloat(doc.price.replace('$', '')) + 5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Booking;
