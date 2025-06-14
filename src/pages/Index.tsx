
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

  // All backdrop elements including the uploaded image
  const backdropElements = [
    "/lovable-uploads/f5749505-21ce-4e5e-a045-feaab8b7a82b.png", // teal figure
    "/lovable-uploads/28e42270-02db-4ce8-9363-2e0ef2b3499c.png", // purple girl
    "/lovable-uploads/35d275ef-a5f5-4173-890a-03d89aa2bdef.png", // yellow tooth
    "/lovable-uploads/28f60642-0227-4ede-9da6-02e0c713ac32.png", // growing smiles text
    "/lovable-uploads/987ffbe2-6fea-4069-83d6-d10900bd56d4.png"  // uploaded growing smiles
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section - Two Column Layout */}
      <section className="relative py-12">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0">
            {/* Floating geometric shapes */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`shape-${i}`}
                className={`absolute rounded-full animate-float ${
                  i % 2 === 0 
                    ? 'bg-gradient-to-r from-teal-200/40 to-blue-200/40' 
                    : 'bg-gradient-to-r from-purple-200/40 to-pink-200/40'
                }`}
                style={{
                  width: Math.random() * 120 + 80,
                  height: Math.random() * 120 + 80,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 15 + 15}s`
                }}
              />
            ))}
            
            {/* Enhanced backdrop logo elements */}
            {[...Array(18)].map((_, i) => (
              <img
                key={`backdrop-${i}`}
                src={backdropElements[Math.floor(Math.random() * backdropElements.length)]}
                alt=""
                className="absolute opacity-25 animate-float"
                style={{
                  width: Math.random() * 120 + 80,
                  height: Math.random() * 120 + 80,
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
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
            
            {/* Left Column: Main Logo - Borderless */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                  alt="Growing Smiles Children's Dentistry" 
                  className="w-96 h-auto object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                />
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
