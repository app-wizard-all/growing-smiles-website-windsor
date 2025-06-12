import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Calendar } from "lucide-react";
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Services
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Contact
              </Link>
              <Link 
                to="/appointment" 
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32 relative overflow-hidden">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Logo Backdrop" 
            className="w-96 h-96 object-contain transform scale-150"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Contact Growing Smiles Children's Dentistry 
              for all your pediatric dental needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative">
        {/* Subtle Logo Brand Mark */}
        <div className="absolute top-8 right-8 opacity-5">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Brand Mark" 
            className="w-32 h-32 object-contain"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Office Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-primary" />
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
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
                      <a 
                        href="tel:519-800-4500" 
                        className="text-primary hover:text-primary/80 text-2xl font-bold transition-colors"
                      >
                        519-800-4500
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-8 h-8 text-primary" />
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

              <div className="bg-gradient-to-br from-primary to-secondary p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
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
                <Link 
                  to="/appointment"
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Request Appointment
                </Link>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 border-b border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Us</h2>
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
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
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
              <p className="text-gray-300 text-lg">1400 Front Rd, Windsor ON N9J 2B3</p>
              <p className="text-gray-300 text-lg">Phone: 519-800-4500</p>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
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
