import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';

const BookingSuccess = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans flex items-center justify-center p-6 selection:bg-[#076249] selection:text-white">
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
        
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-50 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-[#e6f4f0] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle size={40} className="text-[#076249]" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Booking Confirmed!</h1>
          <p className="text-gray-500 font-medium mb-8">
            Your appointment has been successfully scheduled. We've sent a confirmation email with all the details.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 flex items-center text-left">
            <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center mr-4 shrink-0 shadow-sm text-[#076249]">
              <Calendar size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Upcoming Appointment Added</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">You can view and manage this in your Dashboard.</p>
            </div>
          </div>

          <Link 
            to="/dashboard"
            className="inline-flex w-full sm:w-auto bg-[#076249] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#064f3a] transition-all shadow-md hover:shadow-lg items-center justify-center"
          >
            Go to Dashboard
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
