import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Sparkles, Clock, Shield } from "lucide-react";
import Navbar from '../components/NavBar';
import { useEffect, useRef } from "react";

const Index = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated backdrop elements with new images
  const backdropElements = [
    "/lovable-uploads/03a5d35e-4d5d-40e4-8d1f-4b18d3a64f1d.png", // teal figure
    "/lovable-uploads/2eaa7db3-f461-4c7d-8044-68293e0cc878.png", // purple girl
    "/lovable-uploads/ab84c1cf-b7dd-4114-8ffb-44fcd62c5c7a.png", // yellow tooth
    "/lovable-uploads/44d4c24c-7e2f-49ee-9bf1-006f4744da04.png", // growing smiles text
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50 overflow-hidden">
      <Navbar />
      
      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-16 pb-24">
        {/* Enhanced background with subtle gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s', animationDuration: '10s'}}></div>
        </div>

        {/* Two Column Layout: Logo Left, Schedule Form Right */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Main Logo and Trust Indicators */}
            <div>
              {/* Service Area Tagline */}
              <div className="text-center mb-4 animate-fade-in">
                <h2 className="text-xl text-gray-700 font-semibold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-1 bg-300% animate-gradient">
                  Growing Smiles Children's Dentistry
                </h2>
                <p className="text-lg font-medium text-gray-500 flex items-center justify-center gap-1">
                  <span>LaSalle</span>
                  <span className="text-purple-400 animate-pulse">•</span>
                  <span>Windsor</span>
                  <span className="text-teal-400 animate-pulse" style={{animationDelay: '0.5s'}}>•</span>
                  <span>Tecumseh</span>
                  <span className="text-pink-400 animate-pulse" style={{animationDelay: '1s'}}>•</span>
                  <span>Essex & nearby areas</span>
                </p>
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl blur-md opacity-30 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="relative bg-white rounded-xl p-6">
                    <img 
                      src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                      alt="Growing Smiles Children's Dentistry" 
                      className="w-80 h-auto object-contain mx-auto animate-pulse-subtle"
                    />
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in-up mb-10" style={{animationDelay: '0.2s'}}>
                {[
                  { 
                    icon: Smile, 
                    text: "Kid-Friendly", 
                    description: "Fun, welcoming environment",
                    bgColor: "bg-purple-100",
                    iconColor: "text-purple-600",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  { 
                    icon: Heart, 
                    text: "Gentle Care", 
                    description: "Expert, caring approach",
                    bgColor: "bg-teal-100",
                    iconColor: "text-teal-600",
                    gradient: "from-teal-500 to-blue-500"
                  },
                  { 
                    icon: Sparkles, 
                    text: "Fun Experience", 
                    description: "Making visits enjoyable",
                    bgColor: "bg-pink-100",
                    iconColor: "text-pink-600",
                    gradient: "from-pink-500 to-purple-500"
                  },
                  { 
                    icon: Shield, 
                    text: "Safe & Secure", 
                    description: "Professional pediatric care",
                    bgColor: "bg-teal-100",
                    iconColor: "text-teal-600",
                    gradient: "from-blue-500 to-teal-500"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/90 rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Subtle background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50 opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white via-white to-teal-50 opacity-70"></div>
                    
                    <div className="relative flex flex-col items-center text-center z-10">
                      <div className={`w-12 h-12 mb-3 rounded-full ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden shadow-inner`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-30 group-hover:opacity-70 transition-opacity duration-300`}></div>
                        <item.icon className={`w-6 h-6 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-md font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                        {item.text}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form and Office Info */}
            <div className="space-y-6">
              {/* Contact Form */}
              <div className="relative">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 relative overflow-hidden group">
                  {/* Decorative elements for kid-friendly appearance */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-purple-100 rounded-br-full"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-teal-100 rounded-tl-full"></div>
                  <div className="absolute top-12 right-12 w-3 h-3 bg-pink-300 rounded-full animate-pulse-subtle"></div>
                  <div className="absolute top-24 right-8 w-2 h-2 bg-purple-300 rounded-full animate-twinkle"></div>
                  <div className="absolute bottom-16 left-10 w-4 h-4 bg-teal-300 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
                  {/* Subtle background gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50 opacity-70"></div>
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 ease-in-out"></div>
                  <div className="absolute top-0 left-0 w-60 h-60 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 ease-in-out"></div>
                  <div className="relative z-10">
                  
                  {/* Form Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold purple-pink-gradient-text mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-md">
                        <Smile className="w-5 h-5 text-white" />
                      </div>
                      Contact Us
                    </h2>
                    <p className="text-gray-600 text-sm pl-10 border-l-2 border-purple-200">
                      Reach out to us for more information or to schedule a visit
                    </p>
                  </div>

                  {/* Custom Netlify Form */}
                  <div className="w-full">
                    <form 
                      name="contact" 
                      method="POST" 
                      action="/thank-you"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      className="space-y-5"
                      onSubmit={(e) => {
                        if (window.location.hostname === 'localhost') {
                          e.preventDefault();
                          // Show an alert for local testing
                          alert('Form submitted successfully! (This is a simulation for local development)');
                          window.location.href = '/thank-you';
                        }
                        // In production, Netlify will handle the form submission
                      }}
                    >
                      {/* Hidden fields for Netlify */}
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                      </p>

                      {/* Child's Name */}
                      <div>
                        <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center shadow-sm"></div>
                          Child's Full Name *
                        </label>
                        <input
                          type="text"
                          name="childName"
                          id="childName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80 hover:bg-white"
                          placeholder="Enter your child's full name"
                        />
                      </div>
                      
                      {/* Parent/Guardian Name */}
                      <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-300 to-blue-300 flex items-center justify-center shadow-sm"></div>
                          Parent/Guardian Name *
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          id="parentName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80 hover:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 flex items-center justify-center shadow-sm"></div>
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80 hover:bg-white"
                          placeholder="(xxx) xxx-xxxx"
                        />
                      </div>
                      
                      {/* Email Address */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-300 to-teal-300 flex items-center justify-center shadow-sm"></div>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80 hover:bg-white"
                          placeholder="youremail@example.com"
                        />
                      </div>
                      
                      {/* Reason for Contact */}
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-300 to-orange-300 flex items-center justify-center shadow-sm"></div>
                          Reason for Contact *
                        </label>
                        <textarea
                          name="reason"
                          id="reason"
                          rows={3}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80 hover:bg-white"
                          placeholder="Please let us know how we can help"
                        ></textarea>
                      </div>
                      
                      {/* How did you hear about us */}
                      <div>
                        <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 flex items-center justify-center shadow-sm"></div>
                          How did you hear about us? *
                        </label>
                        <div className="mt-1 space-y-2">
                          <div className="flex items-center">
                            <input
                              id="referral-friend"
                              name="referralSource"
                              type="radio"
                              value="Friend/Family"
                              required
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 focus:ring-2 transition-all duration-200"
                            />
                            <label htmlFor="referral-friend" className="ml-2 block text-sm text-gray-700">
                              Friend/Family
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="referral-google"
                              name="referralSource"
                              type="radio"
                              value="Google Search"
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 focus:ring-2 transition-all duration-200"
                            />
                            <label htmlFor="referral-google" className="ml-2 block text-sm text-gray-700">
                              Google Search
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="referral-social"
                              name="referralSource"
                              type="radio"
                              value="Social Media"
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 focus:ring-2 transition-all duration-200"
                            />
                            <label htmlFor="referral-social" className="ml-2 block text-sm text-gray-700">
                              Social Media
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="referral-other"
                              name="referralSource"
                              type="radio"
                              value="Other"
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 focus:ring-2 transition-all duration-200"
                            />
                            <label htmlFor="referral-other" className="ml-2 block text-sm text-gray-700">
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-all duration-300 relative overflow-hidden group shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <span className="relative z-10">Submit</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                </div>
              </div>
              
              {/* Office Info Card with Animation - removed */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with contact info */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              
              {/* Contact Information */}
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-purple-400" />
                  <span>519-800-4500</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-teal-400" />
                  <span>1400 Front Rd, LaSalle ON</span>
                </div>
                <div>
                  <div className="flex items-start mb-2">
                    <Clock className="w-5 h-5 mr-3 mt-0.5 text-pink-400" />
                    <span className="font-medium text-white">Office Hours:</span>
                  </div>
                  <ul className="space-y-1 ml-8 text-sm">
                    <li className="flex justify-between">
                      <span>Monday:</span>
                      <span className="ml-4">9am - 5pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tuesday:</span>
                      <span className="ml-4">9am - 5pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wednesday:</span>
                      <span className="ml-4">10am - 6pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thursday:</span>
                      <span className="ml-4">9am - 5pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday:</span>
                      <span className="ml-4">8am - 1pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="ml-4">By appointment only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:text-right">
              <h3 className="text-lg font-semibold mb-4 md:text-right text-white">Connect With Us</h3>
              
              {/* Social Media Links */}
              <div className="flex md:justify-end space-x-6 mb-6">
                <a 
                  href="https://www.instagram.com/growing_smiles_windsor_lasalle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
              
              <div>
                <a 
                  href="/locate-us" 
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Growing Smiles Children's Dentistry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;