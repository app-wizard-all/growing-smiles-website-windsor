import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Cloud } from "lucide-react";
import Navbar from '../components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative hero-gradient">
        {/* Logo Section - Full Width */}
        <div className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Clouds */}
            <div className="absolute top-10 left-[10%] text-blue-100 animate-float">
              <Cloud size={64} />
            </div>
            <div className="absolute top-20 right-[15%] text-purple-100 animate-float-slow">
              <Cloud size={48} />
            </div>
            
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r 
                           from-blue-200/20 via-purple-200/20 to-pink-200/20 
                           rounded-full blur-3xl"></div>
          </div>

          {/* Logo Container */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative group">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry" 
                className="w-full h-auto object-contain max-h-[250px] 
                         filter drop-shadow-2xl 
                         transition-transform duration-700
                         select-none mix-blend-multiply"
              />
              
              {/* Subtle Highlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr 
                            from-white/0 via-white/30 to-white/0 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-700"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="gradient-text">Creating Happy</span>
                <span className="block mt-2 text-[hsl(var(--primary))]">
                  Little Smiles
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Where gentle care meets playful spirits. Making dental visits 
                an adventure your child looks forward to!
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-8">
              <Link to="/appointment" className="primary-button animate-pulse-subtle">
                <Calendar className="w-6 h-6" />
                <span>Start Your Journey</span>
              </Link>

              {/* Trust Indicators */}
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
                             transform hover:-translate-y-1 
                             transition-all duration-300"
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

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                className="card-hover group"
              >
                <div className={`w-16 h-16 mb-6 rounded-xl 
                                bg-gradient-to-r ${item.gradient} 
                                flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Ready to Join Our
                <span className="block gradient-text">Dental Family?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl
                             shadow-lg hover:shadow-xl
                             transform hover:-translate-y-1 
                             transition-all duration-300">
                  <Phone className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Call us at</p>
                    <span className="text-xl font-semibold text-gray-900">
                      519-800-4500
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl
                             shadow-lg hover:shadow-xl
                             transform hover:-translate-y-1 
                             transition-all duration-300">
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
            <div className="text-center lg:text-right">
              <Link to="/appointment" className="primary-button">
                <Calendar className="w-6 h-6" />
                <span>Book Your Visit Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
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
