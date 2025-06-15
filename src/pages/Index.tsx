
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section - Two Column Layout */}
      <section className="relative py-12">
        {/* Reduced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0">
            {/* Fewer floating geometric shapes */}
            {[...Array(4)].map((_, i) => (
              <div
                key={`shape-${i}`}
                className={`absolute rounded-full animate-float ${
                  i % 2 === 0 
                    ? 'bg-gradient-to-r from-teal-200/15 to-blue-200/15' 
                    : 'bg-gradient-to-r from-purple-200/15 to-pink-200/15'
                }`}
                style={{
                  width: Math.random() * 60 + 40,
                  height: Math.random() * 60 + 40,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 15 + 15}s`
                }}
              />
            ))}
            
            {/* Backdrop logo elements with better spacing */}
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
        </div>

        {/* Two Column Layout: Logo Left, Trust Indicators Right */}
        <div className="relative w-full max-w-6xl mx-auto px-4 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Main Logo - White Border Style */}
            <div className="flex justify-center">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
                <img 
                  src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                  alt="Growing Smiles Children's Dentistry" 
                  className="w-80 h-auto object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-300/20 via-purple-300/20 to-pink-300/20 rounded-3xl blur-xl opacity-50" />
              </div>
            </div>

            {/* Right Column: Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: Smile, 
                  text: "Kid-Friendly", 
                  color: "from-teal-500 to-teal-600", 
                  description: "Fun and welcoming environment" 
                },
                { 
                  icon: Heart, 
                  text: "Gentle Care", 
                  color: "from-purple-500 to-purple-600", 
                  description: "Expert and caring approach" 
                },
                { 
                  icon: Star, 
                  text: "Fun Experience", 
                  color: "from-pink-500 to-purple-500", 
                  description: "Making dental visits enjoyable" 
                },
                { 
                  icon: Shield, 
                  text: "Safe & Secure", 
                  color: "from-blue-500 to-teal-500", 
                  description: "Professional pediatric care" 
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-4
                           shadow-md hover:shadow-lg
                           transform hover:-translate-y-1 hover:scale-105
                           transition-all duration-500
                           animate-fade-in border border-teal-100"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-8 h-8 mb-2 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 text-center">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Service Area Tagline */}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 font-medium bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 inline-block shadow-md border border-purple-100">
              Children's dental care for LaSalle, Windsor, Tecumseh, Essex & nearby areas
            </p>
          </div>
        </div>
      </section>

      {/* Streamlined Appointment Section */}
      <section className="py-12 bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-pink-500/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stylized Form Container */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-teal-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl animate-pulse-subtle" />
            <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-purple-50/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gradient-to-br from-teal-200/50 to-purple-200/50">
              
              {/* Form Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Schedule Your Visit
                </h2>
                <p className="text-gray-600">
                  Book your child's appointment with our gentle pediatric dentist
                </p>
              </div>

              {/* Stylized Google Form */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-purple-50/30 shadow-inner border border-purple-100/50">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf9PxJsauDA2KCGd22xrnYeIIO9U0ApVx0quDbn1D5ffSlSuw/viewform?embedded=true" 
                  width="100%" 
                  height="450" 
                  className="border-0 rounded-2xl"
                  title="Appointment Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* Contact Info Below Form */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:519-800-4500" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Call 519-800-4500
                  </a>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 border-2 border-gradient-to-r from-teal-500 to-purple-500 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    View Location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 via-purple-600/90 to-pink-600/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <Phone className="w-12 h-12 mx-auto opacity-90" />
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="text-xl font-semibold">519-800-4500</p>
            </div>
            <div className="space-y-3">
              <MapPin className="w-12 h-12 mx-auto opacity-90" />
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="text-lg">1400 Front Rd, Windsor ON</p>
            </div>
            <div className="space-y-3">
              <Clock className="w-12 h-12 mx-auto opacity-90" />
              <h3 className="text-xl font-bold">Office Hours</h3>
              <p className="text-lg">Mon-Fri: 8AM-5PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-16 w-auto mx-auto brightness-0 invert opacity-80"
              />
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-6">
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
