
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import Navbar from '../components/NavBar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />

      {/* Contact Content */}
      <section className="py-20 relative">
        {/* Balanced gradient background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 ${
                i % 4 === 0 
                  ? 'bg-gradient-to-r from-teal-200 to-blue-200' 
                  : i % 4 === 1
                  ? 'bg-gradient-to-r from-purple-200 to-pink-200'
                  : i % 4 === 2
                  ? 'bg-gradient-to-r from-pink-200 to-purple-200'
                  : 'bg-gradient-to-r from-blue-200 to-teal-200'
              }`}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
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
                        <p>Windsor, ON N9J 2B3</p>
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
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span className="font-medium">Monday - Friday</span>
                          <span>8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Saturday</span>
                          <span>9:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Sunday</span>
                          <span>Closed</span>
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
                <p className="text-gray-600">Located in the heart of Windsor, Ontario</p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.123456789!2d-83.0123456!3d42.3123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1400%20Front%20Rd%2C%20Windsor%2C%20ON%20N9J%202B3!5e0!3m2!1sen!2sca!4v1234567890"
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
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-semibold">Growing Smiles Children's Dentistry</h3>
              <p className="text-purple-200 text-lg">1400 Front Rd, Windsor ON N9J 2B3</p>
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

export default Contact;
