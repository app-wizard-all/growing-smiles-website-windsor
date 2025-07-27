import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/NavBar';

const Appointment = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Listen for form submission success message
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'form-submitted') {
        setShowSuccessPopup(true);
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowSuccessPopup(false)} />
          
          {/* Popup Content */}
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-purple-500 px-6 py-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <h3 className="text-xl font-bold">Form Submitted Successfully</h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Thank you for submitting your form. Our team will get in touch with you within 1-2 business days.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
              onLoad={() => {
                // Setup message listener for form success
                const handleIframeLoad = () => {
                  // Check if URL contains the success parameter
                  const iframe = document.querySelector('iframe');
                  if (iframe && iframe.contentWindow && 
                      iframe.contentWindow.location.href.includes('formResponse')) {
                    setShowSuccessPopup(true);
                  }
                };
                
                try {
                  handleIframeLoad();
                } catch (e) {
                  // Cannot access iframe content due to same-origin policy
                  // Will rely on postMessage instead
                }
              }}
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
