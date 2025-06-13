
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section - Enhanced Logo Presentation with Side Trust Indicators */}
      <section className="relative py-16">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full animate-float ${
                  i % 2 === 0 
                    ? 'bg-gradient-to-r from-teal-200/20 to-blue-200/20' 
                    : 'bg-gradient-to-r from-purple-200/20 to-pink-200/20'
                }`}
                style={{
                  width: Math.random() * 120 + 60,
                  height: Math.random() * 120 + 60,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 15 + 15}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Logo and Trust Indicators Layout */}
        <div className="relative w-full max-w-7xl mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            
            {/* Left Trust Indicators */}
            <div className="lg:col-span-2 space-y-4">
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
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-4
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 hover:scale-105
                           transition-all duration-500
                           animate-fade-in border border-teal-100"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`w-10 h-10 mb-3 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Logo - Made Bigger */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/30 via-purple-400/20 to-pink-400/30 rounded-3xl blur-xl opacity-60 animate-pulse-subtle" />
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100">
                  <img 
                    src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                    alt="Growing Smiles Children's Dentistry" 
                    className="w-64 h-auto object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Trust Indicators */}
            <div className="lg:col-span-2 space-y-4">
              {[
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
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 hover:scale-105
                           transition-all duration-500
                           animate-fade-in border border-purple-100"
                  style={{ animationDelay: `${(index + 2) * 0.3}s` }}
                >
                  <div className={`w-10 h-10 mb-3 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section - Now Higher Up */}
      <section className="py-16 bg-gradient-to-b from-white via-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Appointment Form Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-lg" />
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-purple-100">
                {/* Google Form */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-inner">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf9PxJsauDA2KCGd22xrnYeIIO9U0ApVx0quDbn1D5ffSlSuw/viewform?embedded=true" 
                    width="100%" 
                    height="800" 
                    className="border-0"
                    title="Appointment Form"
                  >
                    Loading…
                  </iframe>
                </div>

                {/* Contact Info Below Form */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="tel:519-800-4500" 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="w-5 h-5" />
                      Call 519-800-4500
                    </a>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
                    >
                      <MapPin className="w-5 h-5" />
                      View Location
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90" />
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
