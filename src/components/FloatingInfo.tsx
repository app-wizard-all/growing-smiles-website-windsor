import { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, ChevronUp, Info, X } from 'lucide-react';
import InfoPopup from './InfoPopup';

interface FloatingInfoProps {
  delay?: number; // Delay in milliseconds before the component appears
}

const FloatingInfo = ({ delay = 1000 }: FloatingInfoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  // Make the component visible after the delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Floating Info Box */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${
          isExpanded ? 'translate-y-0' : 'translate-y-20'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative w-72">
          {/* Peek Section (always visible) */}
          <div 
            className="bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 flex items-center justify-between cursor-pointer group"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center space-x-2 text-white">
              <Info className="w-4 h-4" />
              <span className="font-medium">Hours & Location</span>
            </div>
            <ChevronUp 
              className={`w-5 h-5 text-white transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`} 
            />
          </div>
          
          {/* Expandable Content */}
          <div className="p-4">
            {/* Location */}
            <div className="flex items-start mb-3">
              <MapPin className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">1400 Front Rd</p>
                <p className="text-sm text-gray-600">Windsor, ON N9J 2B3</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center mb-3">
              <Phone className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" />
              <a 
                href="tel:519-800-4500"
                className="font-medium text-purple-700 hover:underline"
              >
                519-800-4500
              </a>
            </div>
            
            {/* Hours Preview */}
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-gray-900 mb-1">Office Hours:</p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-gray-600">
                  <p>Mon: <span className="font-medium">9am-5pm</span></p>
                  <p>Tue: <span className="font-medium">9am-5pm</span></p>
                  <p>Wed: <span className="font-medium">10am-6pm</span></p>
                  <p>Thu: <span className="font-medium">9am-5pm</span></p>
                  <p>Fri: <span className="font-medium">8am-1pm</span></p>
                  <p>Sat: <span className="font-medium">By appt.</span></p>
                </div>
              </div>
            </div>
            
            {/* View Details Button */}
            <button
              className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-1"
              onClick={() => {
                setShowPopup(true);
                setIsExpanded(false);
              }}
            >
              <Info className="w-4 h-4" />
              <span>View Full Details</span>
            </button>
          </div>
        </div>
        
        {/* Pulsing Circle */}
        <div 
          className={`absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full ${
            isExpanded ? 'opacity-0' : 'animate-ping'
          }`}
        />
      </div>
      
      {/* Info Popup */}
      <InfoPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
};

export default FloatingInfo;