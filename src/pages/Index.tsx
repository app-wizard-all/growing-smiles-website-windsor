
import { Link } from "react-router-dom";
import { Phone, MapPin, Calendar } from "lucide-react";

const Index = () => {
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

      {/* Logo Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 lg:py-24 overflow-hidden">
        {/* Large Logo at Top */}
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Growing Smiles Children's Dentistry Logo" 
            className="h-32 lg:h-40 w-auto mx-auto mb-8"
          />
        </div>

        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Logo Backdrop" 
            className="w-96 h-96 object-contain transform scale-150"
          />
        </div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f0f9ff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Gentle Pediatric Dental Care in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Windsor
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              Healthy smiles start early. We care for your children's dental needs with a friendly, 
              comfortable, and caring environment that makes every visit a positive experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link 
                to="/services"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Appointment</h2>
            <p className="text-xl text-gray-600">Book your child's dental visit today and start their journey to a healthy smile</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50/50 to-teal-50/50 rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf6DwR2k7aP8Ql3h5vM9nXcYzW4tR1bE2gH6jI8kL0pN3qO5/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
                title="Appointment Booking Form"
              >
                Loading appointment form...
              </iframe>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Having trouble with the form? You can also call us at{" "}
                <a href="tel:519-800-4500" className="text-primary font-semibold hover:underline">
                  519-800-4500
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Logo Backdrop" 
            className="w-64 h-64 object-contain"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Questions? We're Here to Help!
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Contact us for any questions about your child's dental care or to speak with our friendly team.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 text-white bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-sm">Call us today</p>
                  <p className="text-xl font-semibold">519-800-4500</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-sm">Visit us at</p>
                  <p className="text-xl font-semibold">1400 Front Rd, Windsor ON</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/contact"
              className="inline-block bg-white text-primary px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
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

export default Index;
