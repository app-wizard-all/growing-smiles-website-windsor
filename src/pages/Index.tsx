import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Cloud } from "lucide-react";
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
      <section className="relative hero-gradient min-h-screen flex items-center">
        {/* Floating Elements Background */}
        <div className="absolute inset-0 overflow-hidden">
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

        {/* Logo Section with Parallax */}
        <div ref={parallaxRef} className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white py-4">
          <div className="w-full flex justify-center animate-fade-in">
            <div className="w-full" style={{ maxHeight: '15vh' }}>
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                alt="Growing Smiles Children's Dentistry" 
                className="w-full h-full object-contain max-w-5xl mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Main Content with Animations */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="gradient-text animate-fade-in">Creating Happy</span>
                <span className="block mt-2 text-[hsl(var(--primary))] animate-fade-in-delayed">
                  Little Smiles
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-delayed-2">
                Where gentle care meets playful spirits. Making dental visits 
                an adventure your child looks forward to!
              </p>
            </div>

            {/* Animated CTAs */}
            <div className="space-y-8 animate-fade-in-delayed-3">
              <div className="transform transition-all duration-300 hover:scale-105 active:scale-95">
                <Link to="/appointment" className="primary-button animate-pulse-subtle">
                  <Calendar className="w-6 h-6" />
                  <span>Start Your Journey</span>
                </Link>
              </div>

              {/* Animated Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: Smile, text: "Kid-Friendly", color: "text-blue-500" },
                  { icon: Heart, text: "Gentle Care", color: "text-purple-500" },
                  { icon: Star, text: "Fun Experience", color: "text-pink-500" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 px-4 py-2 
                             bg-white/50 backdrop-blur-sm rounded-full
                             shadow-sm hover:shadow-md
                             transform hover:-translate-y-1 hover:scale-105
                             active:scale-95
                             transition-all duration-300
                             animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                className="card-hover group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
                  className="flex items-center gap-4 p-4 bg-white rounded-xl
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 hover:scale-102
                           active:scale-98
                           transition-all duration-300"
                >
                  <Phone className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Call us at</p>
                    <span className="text-xl font-semibold text-gray-900">
                      519-800-4500
                    </span>
                  </div>
                </div>
                <div 
                  className="flex items-center gap-4 p-4 bg-white rounded-xl
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 hover:scale-102
                           active:scale-98
                           transition-all duration-300"
                >
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
