
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Home
              </Link>
              <Link to="/contact" className="text-primary font-medium">
                Contact
              </Link>
              <Link 
                to="/appointment" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Get in touch with Growing Smiles Children's Dentistry 
              for all your pediatric dental needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Office Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Address</h3>
                      <div className="text-gray-600 leading-relaxed">
                        <p className="font-medium">Growing Smiles Children's Dentistry</p>
                        <p>1400 Front Rd</p>
                        <p>Windsor, ON N9J 2B3</p>
                        <p>Canada</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
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
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
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

              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Schedule?</h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Book your child's appointment today for gentle, professional pediatric dental care 
                  in a comfortable, kid-friendly environment.
                </p>
                <Link 
                  to="/appointment"
                  className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Request Appointment
                </Link>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-xl font-semibold">Growing Smiles Children's Dentistry</p>
              <p className="text-gray-400">1400 Front Rd, Windsor ON N9J 2B3</p>
              <p className="text-gray-400">Phone: 519-800-4500</p>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
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
