
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, Phone } from "lucide-react";

const Appointment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Growing Smiles</h1>
                <p className="text-sm text-gray-600">Children's Dentistry</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-teal-600 font-medium">Home</Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact</Link>
              <Link to="/appointment" className="text-teal-600 font-medium">Book Appointment</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Request an Appointment</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule your child's visit with our gentle, caring team. We make every dental appointment a positive experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Information Panel */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Before Your Visit</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bring your child's health card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Arrive 15 minutes early for paperwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>List any medications or allergies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bring a favorite toy for comfort</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                <p className="mb-4 text-sm">Have questions about your appointment or need immediate assistance?</p>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">519-800-4500</span>
                </div>
                <p className="text-xs text-teal-100">Our friendly staff is here to help!</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-teal-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Appointment Request Form</h2>
                </div>
                
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>HIPAA Compliance:</strong> This form is secure and HIPAA-compliant. 
                    Your personal information will be handled with the utmost care and privacy.
                  </p>
                </div>

                {/* Google Form Embed - Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Appointment Form</h3>
                  <p className="text-gray-500 mb-6">
                    The secure Google Form will be embedded here once provided by the clinic.
                  </p>
                  
                  {/* Temporary iframe placeholder */}
                  <div className="bg-white border rounded-lg p-6 text-left">
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Placeholder for Google Form Embed:</strong>
                    </p>
                    <code className="text-xs text-gray-500 block p-3 bg-gray-100 rounded">
                      &lt;iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
                      width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0"&gt;
                      Loading…&lt;/iframe&gt;
                    </code>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>What happens next?</strong> After submitting your request, our team will contact you 
                    within 24 hours to confirm your appointment time and answer any questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold">Growing Smiles Children's Dentistry</span>
            </div>
            <p className="text-gray-400 mb-4">1400 Front Rd, Windsor ON N9J 2B3 | Phone: 519-800-4500</p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Growing Smiles Children's Dentistry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Appointment;
