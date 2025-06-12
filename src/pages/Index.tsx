import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Cloud, Sparkles } from "lucide-react";
import Navbar from '../components/NavBar';
import { useEffect, useRef } from "react";

const Index = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section className="relative hero-gradient min-h-screen flex flex-col items-center justify-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm animate-float"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
        {/* Logo Row */}
        <div className="relative w-full flex justify-center items-center py-8 animate-fade-in">
          <div className="relative w-full max-w-4xl px-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur opacity-40" />
            <div className="relative bg-white/80 rounded-3xl p-6 shadow-xl flex justify-center items-center h-48">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                alt="Growing Smiles Children's Dentistry" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* Text Row */}
        <div className="relative w-full flex flex-col items-center py-4 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-normal tracking-tight text-center">
            <span className="gradient-text animate-fade-in inline-block">
              Creating Happy
            </span>
            <span className="block mt-2 text-[hsl(var(--primary))] animate-fade-in-delayed">
              Little Smiles
            </span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <p className="text-xl text-gray-600 leading-relaxed">
              Where gentle care meets playful spirits
            </p>
          </div>
          {/* Animated CTAs */}
          <div className="flex flex-row gap-6 justify-center mt-8 w-full max-w-md">
            <Link to="/appointment" className="flex-1 flex items-center justify-center primary-button animate-pulse-subtle text-lg py-4">
              <Calendar className="w-6 h-6 mr-2" />
              <span>Start Your Journey</span>
            </Link>
            <Link to="/services" className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-4">
              <Smile className="w-6 h-6 mr-2" />
              <span>Our Services</span>
            </Link>
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Smile, text: "Kid-Friendly", color: "text-blue-500", description: "Fun and welcoming environment" },
            { icon: Heart, text: "Gentle Care", color: "text-purple-500", description: "Expert and caring approach" },
            { icon: Star, text: "Fun Experience", color: "text-pink-500", description: "Making dental visits enjoyable" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6
                       shadow-lg hover:shadow-xl
                       transform hover:-translate-y-1 hover:scale-102
                       active:scale-98
                       transition-all duration-300
                       animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.text}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section with Scroll Animations */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Why Families Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating positive dental experiences that last a lifetime
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Magical First Visit",
                description: "A gentle introduction filled with fun surprises",
                icon: Smile,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Caring Approach",
                description: "Expert care delivered with patience and understanding",
                icon: Heart,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "Easy Scheduling",
                description: "Convenient booking that works for your family",
                icon: Calendar,
                gradient: "from-pink-500 to-pink-600"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-8
                         shadow-lg hover:shadow-xl
                         transform hover:-translate-y-2
                         transition-all duration-300
                         animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative">
                  <div 
                    className={`w-16 h-16 mb-6 rounded-xl 
                              bg-gradient-to-r ${item.gradient} 
                              flex items-center justify-center
                              group-hover:scale-110 group-hover:rotate-360
                              transition-all duration-500`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Hover Effects */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-4xl font-bold">
                Ready to Join Our
                <span className="block gradient-text transform transition-transform duration-300 hover:scale-105">
                  Dental Family?
                </span>
              </h2>
              <div className="space-y-6">
                <div 
                  className="group relative bg-white rounded-xl p-6
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 hover:scale-102
                           active:scale-98
                           transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative flex items-center gap-4">
                    <Phone className="w-8 h-8 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600">Call us at</p>
                      <span className="text-xl font-semibold text-gray-900">
                        519-800-4500
                      </span>
                    </div>
                  </div>
                </div>
                <div 
                  className="group relative bg-white rounded-xl p-6
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 hover:scale-102
                           active:scale-98
                           transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative flex items-center gap-4">
                    <MapPin className="w-8 h-8 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-600">Visit us at</p>
                      <span className="text-xl font-semibold text-gray-900">
                        1400 Front Rd, Windsor ON
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right animate-fade-in-up">
              <div className="transform transition-all duration-300 hover:scale-105 active:scale-95">
                <Link to="/appointment" className="primary-button">
                  <Calendar className="w-6 h-6" />
                  <span>Book Your Visit Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Growing Smiles Children's Dentistry. 
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
