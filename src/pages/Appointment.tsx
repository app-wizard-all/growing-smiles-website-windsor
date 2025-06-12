import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Appointment = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Form Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Book Your Appointment
            </h1>
            <p className="mt-2 text-gray-600">
              Please fill out the form below to schedule your visit
            </p>
          </div>

          {/* Google Form */}
          <div className="relative w-full overflow-hidden rounded-xl bg-white">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSf9PxJsauDA2KCGd22xrnYeIIO9U0ApVx0quDbn1D5ffSlSuw/viewform?embedded=true" 
              width="100%" 
              height="720" 
              className="border-0"
              title="Appointment Form"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center text-gray-600">
          <p>Having trouble? Contact us at 519-800-4500</p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
