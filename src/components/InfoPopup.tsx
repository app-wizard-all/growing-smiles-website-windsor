import { useState } from 'react';
import { MapPin, Clock, X, Phone } from 'lucide-react';

interface InfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoPopup = ({ isOpen, onClose }: InfoPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-teal-500 px-6 py-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold">Office Information</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Location */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3 text-purple-700">
                <MapPin className="w-5 h-5" />
                <h4 className="font-bold text-lg">Location</h4>
              </div>
              <div className="space-y-1 ml-7">
                <p className="font-medium">Growing Smiles Children's Dentistry</p>
                <p>1400 Front Rd</p>
                <p>LaSalle, ON N9J 2B3</p>
              </div>
              <div className="mt-4 ml-7">
                <a 
                  href="/locate-us" 
                  className="text-sm text-purple-700 font-medium hover:underline"
                >
                  View on map →
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3 text-teal-700">
                <Phone className="w-5 h-5" />
                <h4 className="font-bold text-lg">Contact</h4>
              </div>
              <div className="space-y-1 ml-7">
                <p className="font-medium">Phone</p>
                <a 
                  href="tel:519-800-4500" 
                  className="text-teal-700 text-lg font-bold hover:underline"
                >
                  519-800-4500
                </a>
              </div>
            </div>
          </div>
          
          {/* Office Hours */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3 text-pink-700">
              <Clock className="w-5 h-5" />
              <h4 className="font-bold text-lg">Office Hours</h4>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ml-7">
              <div className="bg-pink-50 p-2 rounded-lg text-center">
                <p className="font-medium text-pink-700">Monday</p>
                <p className="text-sm">9am - 5pm</p>
              </div>
              <div className="bg-purple-50 p-2 rounded-lg text-center">
                <p className="font-medium text-purple-700">Tuesday</p>
                <p className="text-sm">9am - 5pm</p>
              </div>
              <div className="bg-teal-50 p-2 rounded-lg text-center">
                <p className="font-medium text-teal-700">Wednesday</p>
                <p className="text-sm">10am - 6pm</p>
              </div>
              <div className="bg-pink-50 p-2 rounded-lg text-center">
                <p className="font-medium text-pink-700">Thursday</p>
                <p className="text-sm">9am - 5pm</p>
              </div>
              <div className="bg-purple-50 p-2 rounded-lg text-center">
                <p className="font-medium text-purple-700">Friday</p>
                <p className="text-sm">8am - 1pm</p>
              </div>
              <div className="bg-teal-50 p-2 rounded-lg text-center">
                <p className="font-medium text-teal-700">Saturday</p>
                <p className="text-sm">By appointment</p>
              </div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg text-center mt-2 w-1/2 mx-auto">
              <p className="font-medium text-gray-700">Sunday</p>
              <p className="text-sm">Closed</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;