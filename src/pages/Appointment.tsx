import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Phone, CheckCircle, Shield, Users } from "lucide-react";

const Appointment = () => {
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
              Request an Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule your child's visit with our gentle, caring team. We make every dental 
              appointment a positive experience for both you and your child.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        {/* Background Logo */}
        <div className="absolute bottom-0 right-0 opacity-5 transform translate-x-1/4 translate-y-1/4">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Background Logo" 
            className="w-80 h-80 object-contain"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Before Your Visit */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Before Your Visit</h3>
                <ul className="space-y-4">
                  {[
                    "Bring your child's health card",
                    "Arrive 15 minutes early for paperwork",
                    "List any medications or allergies", 
                    "Bring a favorite toy for comfort"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help */}
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                {/* Background Logo */}
                <div className="absolute top-4 right-4 opacity-20">
                  <img 
                    src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                    alt="Background Logo" 
                    className="w-16 h-16 object-contain brightness-0 invert"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Need Help?</h3>
                </div>
                <p className="mb-4 text-white/90">
                  Have questions about your appointment or need immediate assistance?
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5" />
                  <span className="text-xl font-bold">519-800-4500</span>
                </div>
                <p className="text-sm text-white/80">Our friendly staff is here to help!</p>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Appointment Request Form</h2>
                </div>
                
                {/* HIPAA Notice */}
                <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">HIPAA Compliance</h4>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        This form is secure and HIPAA-compliant. Your personal information will be 
                        handled with the utmost care and privacy according to all healthcare privacy regulations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center bg-gray-50">
                  <div className="max-w-md mx-auto">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Appointment Form</h3>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                      The secure Google Form will be embedded here once provided by the clinic.
                    </p>
                    
                    {/* Temporary iframe placeholder */}
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-left">
                      <p className="text-sm text-gray-600 mb-4 font-medium">
                        Placeholder for Google Form Embed:
                      </p>
                      <code className="text-xs text-gray-500 block p-4 bg-gray-100 rounded-lg font-mono leading-relaxed">
                        &lt;iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
                        width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0"&gt;
                        Loading…&lt;/iframe&gt;
                      </code>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">What happens next?</h4>
                      <p className="text-green-800 text-sm leading-relaxed">
                        After submitting your request, our friendly team will contact you within 24 hours 
                        to confirm your appointment time and answer any questions you may have.
                      </p>
                    </div>
                  </div>
                </div>
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

export default Appointment;
