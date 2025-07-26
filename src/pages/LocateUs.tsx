import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import Navbar from '../components/NavBar';

const LocateUs = () => {
  // Updated backdrop elements with new images
  const backdropElements = [
    "/lovable-uploads/03a5d35e-4d5d-40e4-8d1f-4b18d3a64f1d.png", // teal figure
    "/lovable-uploads/2eaa7db3-f461-4c7d-8044-68293e0cc878.png", // purple girl
    "/lovable-uploads/ab84c1cf-b7dd-4114-8ffb-44fcd62c5c7a.png", // yellow tooth
    "/lovable-uploads/44d4c24c-7e2f-49ee-9bf1-006f4744da04.png", // growing smiles text
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />

      {/* Contact Content */}
      <section className="py-20 relative">
        {/* Consistent backdrop with better spacing */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className={`absolute rounded-full opacity-12 ${
                i % 4 === 0 
                  ? 'bg-gradient-to-r from-teal-200 to-blue-200' 
                  : i % 4 === 1
                  ? 'bg-gradient-to-r from-purple-200 to-pink-200'
                  : i % 4 === 2
                  ? 'bg-gradient-to-r from-pink-200 to-purple-200'
                  : 'bg-gradient-to-r from-blue-200 to-teal-200'
              }`}
              style={{
                width: Math.random() * 60 + 40,
                height: Math.random() * 60 + 40,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
          
          {/* Logo backdrop elements with better spacing */}
          {[...Array(6)].map((_, i) => (
            <img
              key={`backdrop-${i}`}
              src={backdropElements[Math.floor(Math.random() * backdropElements.length)]}
              alt=""
              className="absolute opacity-12 animate-float"
              style={{
                width: Math.random() * 60 + 50,
                height: Math.random() * 60 + 50,
                left: `${Math.random() * 70 + 15}%`,
                top: `${Math.random() * 70 + 15}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 20}s`
              }}
            />
          ))}
        </div>

        {/* Subtle Logo Brand Mark */}
        <div className="absolute top-8 right-8 opacity-5">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Brand Mark" 
            className="w-32 h-32 object-contain"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-teal-100">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-8">Office Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Address</h3>
                      <div className="text-gray-600 leading-relaxed space-y-1">
                        <p className="font-medium text-lg">Growing Smiles Children's Dentistry</p>
                        <p>1400 Front Rd</p>
                        <p>LaSalle, ON N9J 2B3</p>
                        <p>Canada</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
                      <a 
                        href="tel:519-800-4500" 
                        className="text-purple-600 hover:text-purple-700 text-2xl font-bold transition-colors"
                      >
                        519-800-4500
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg">Office Hours</h3>
                      <div className="space-y-3 text-gray-600 mt-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-r from-purple-50 to-white p-3 rounded-lg">
                            <span className="font-semibold text-purple-700 block mb-1">Monday</span>
                            <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                          </div>
                          
                          <div className="bg-gradient-to-r from-teal-50 to-white p-3 rounded-lg">
                            <span className="font-semibold text-teal-700 block mb-1">Tuesday</span>
                            <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                          </div>
                          
                          <div className="bg-gradient-to-r from-pink-50 to-white p-3 rounded-lg">
                            <span className="font-semibold text-pink-700 block mb-1">Wednesday</span>
                            <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-white p-3 rounded-lg">
                            <span className="font-semibold text-blue-700 block mb-1">Thursday</span>
                            <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                          </div>
                          
                          <div className="bg-gradient-to-r from-purple-50 to-white p-3 rounded-lg">
                            <span className="font-semibold text-purple-700 block mb-1">Friday</span>
                            <span className="text-gray-600">8:00 AM - 1:00 PM</span>
                          </div>
                          
                          <div className="bg-gradient-to-r from-teal-50 to-white p-3 rounded-lg">
                            <span className="font-semibold text-teal-700 block mb-1">Saturday</span>
                            <span className="text-gray-600">By appointment only</span>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg w-1/2 mx-auto text-center">
                          <span className="font-semibold text-gray-700 block mb-1">Sunday</span>
                          <span className="text-gray-600">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500 via-purple-500 to-pink-500 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                {/* Background Logo */}
                <div className="absolute top-4 right-4 opacity-20">
                  <img 
                    src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                    alt="Background Logo" 
                    className="w-16 h-16 object-contain brightness-0 invert"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Ready to Schedule?</h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Book your child's appointment today for gentle, professional pediatric dental care 
                  in a comfortable, kid-friendly environment.
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf9PxJsauDA2KCGd22xrnYeIIO9U0ApVx0quDbn1D5ffSlSuw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Request Appointment
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-purple-100">
              <div className="p-8 border-b border-gray-100">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">Find Us</h2>
                <p className="text-gray-600">Located in the heart of LaSalle, Ontario</p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.123456789!2d-83.0123456!3d42.3123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1400%20Front%20Rd%2C%20LaSalle%2C%20ON%20N9J%202B3!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Growing Smiles Children's Dentistry Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
        {/* Subtle Logo in Footer */}
        <div className="absolute top-4 right-4 opacity-10">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Footer Logo" 
            className="w-16 h-16 object-contain brightness-0 invert"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://www.instagram.com/growing_smiles_windsor_lasalle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058 1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#"
                className="text-purple-300 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#"
                className="text-purple-300 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
            
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-semibold">Growing Smiles Children's Dentistry</h3>
              <p className="text-purple-200 text-lg">1400 Front Rd, LaSalle ON N9J 2B3</p>
              <p className="text-purple-200 text-lg">Phone: 519-800-4500</p>
            </div>
            <div className="border-t border-purple-700 pt-8">
              <p className="text-purple-300">
                © {new Date().getFullYear()} Growing Smiles Children's Dentistry. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocateUs;
