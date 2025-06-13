
import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Sparkles, Clock } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section - Enhanced Logo Presentation */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-teal-200/20 to-blue-200/20 animate-float"
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

        {/* Enhanced Logo Section */}
        <div className="relative w-full max-w-6xl mx-auto px-8 mb-16">
          <div className="text-center">
            {/* Logo Container with Beautiful Presentation */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/30 via-blue-400/20 to-teal-400/30 rounded-3xl blur-xl opacity-60 animate-pulse-subtle" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-teal-100">
                <img 
                  src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                  alt="Growing Smiles Children's Dentistry" 
                  className="w-full max-w-2xl h-auto object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-gradient bg-300% animate-pulse">
                  Creating Happy
                </span>
                <span className="block mt-4 text-secondary">
                  Little Smiles
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-3 mt-6">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-twinkle" />
                <p className="text-2xl text-gray-600 font-medium">
                  Where gentle care meets playful spirits
                </p>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-twinkle" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Smile, text: "Kid-Friendly", color: "from-teal-500 to-teal-600", description: "Fun and welcoming environment" },
                { icon: Heart, text: "Gentle Care", color: "from-blue-500 to-blue-600", description: "Expert and caring approach" },
                { icon: Star, text: "Fun Experience", color: "from-teal-400 to-blue-500", description: "Making dental visits enjoyable" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8
                           shadow-xl hover:shadow-2xl
                           transform hover:-translate-y-2 hover:scale-105
                           transition-all duration-500
                           animate-fade-in border border-teal-100"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section - Integrated */}
      <section className="py-24 bg-gradient-to-b from-white to-teal-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Book Your Visit
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to give your child the gift of a healthy, beautiful smile? 
              Schedule your appointment today and join our dental family!
            </p>
          </div>

          {/* Appointment Form Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-3xl blur-lg" />
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-teal-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Schedule Your Appointment
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

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
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="w-5 h-5" />
                      Call 519-800-4500
                    </a>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 border-2 border-teal-500 text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300"
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
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-blue-600/90" />
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
