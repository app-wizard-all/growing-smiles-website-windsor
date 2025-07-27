import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/NavBar';

const Appointment = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLIFrameElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to manually show success popup (for testing)
  const simulateFormSubmission = () => {
    setShowSuccessPopup(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Listen for form submission success message
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'form-submitted') {
        setShowSuccessPopup(true);
      }
    };

    // Custom solution for Google Form submission
    const formSubmitHandler = (e: MouseEvent) => {
      // Get all submit buttons in the form iframe
      const iframe = formRef.current;
      if (!iframe || !iframe.contentDocument) return;
      
      // Add custom logic to detect Google Form submission
      // This is a backup for the onLoad method
      const isSubmitButton = (e.target as HTMLElement)?.closest('button[type="submit"]');
      if (isSubmitButton) {
        // Set a flag that submission was attempted
        setFormSubmitted(true);
        
        // Add a small delay to show success popup
        setTimeout(() => {
          setShowSuccessPopup(true);
        }, 1000);
      }
    };

    // Attempt to add click listener to the iframe content
    try {
      const iframe = formRef.current;
      if (iframe && iframe.contentDocument) {
        iframe.contentDocument.addEventListener('click', formSubmitHandler);
      }
    } catch (e) {
      console.log('Cannot access iframe due to same-origin policy');
    }

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      
      // Cleanup iframe event listener if possible
      try {
        const iframe = formRef.current;
        if (iframe && iframe.contentDocument) {
          iframe.contentDocument.removeEventListener('click', formSubmitHandler);
        }
      } catch (e) {
        // Ignore errors due to same-origin policy
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fadeIn">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowSuccessPopup(false)} />
          
          {/* Popup Content */}
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-scaleIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-purple-500 px-6 py-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <h3 className="text-xl font-bold">Thank You!</h3>
              </div>
              <button 
                onClick={() => setShowSuccessPopup(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close popup"
              >
                ×
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-center text-lg">
                Your appointment request has been submitted successfully. Our team will reach out to you within 1-2 business days.
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  to="/"
                  className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Back to Website
                </Link>
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
              ref={formRef}
              src="https://docs.google.com/forms/d/e/1FAIpQLSf9PxJsauDA2KCGd22xrnYeIIO9U0ApVx0quDbn1D5ffSlSuw/viewform?embedded=true" 
              width="100%" 
              height="720" 
              className="border-0"
              title="Appointment Form"
              onLoad={() => {
                const iframe = document.querySelector('iframe');
                if (!iframe) return;
                
                // If form was previously submitted, show success popup
                if (formSubmitted) {
                  setShowSuccessPopup(true);
                  return;
                }
                
                try {
                  // Try to detect form submission through URL
                  if (iframe.contentWindow?.location.href.includes('formResponse')) {
                    setShowSuccessPopup(true);
                  }
                  
                  // Add a message sender to the iframe content
                  // This is to overcome cross-origin issues
                  const script = document.createElement('script');
                  script.textContent = `
                    // Find all submit buttons
                    const submitButtons = document.querySelectorAll('button[type="submit"]');
                    submitButtons.forEach(button => {
                      button.addEventListener('click', () => {
                        // Send message to parent window
                        window.parent.postMessage({ type: 'form-submitted' }, '*');
                      });
                    });
                    
                    // Also check for successful submission page
                    if (window.location.href.includes('formResponse')) {
                      window.parent.postMessage({ type: 'form-submitted' }, '*');
                    }
                  `;
                  
                  // Try to inject the script
                  if (iframe.contentDocument?.body) {
                    iframe.contentDocument.body.appendChild(script);
                  }
                } catch (e) {
                  // Cannot directly access iframe content due to same-origin policy
                  // Will rely on postMessage and other detection methods instead
                }
              }}
            >
              Loading…
            </iframe>
            
            {/* Testing button - remove in production */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={simulateFormSubmission}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Simulate Form Submission (DEV ONLY)
                </button>
              </div>
            )}
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
