import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Cloud } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Clouds */}
          <div className="absolute top-20 left-[10%] text-blue-100 animate-float">
            <Cloud size={64} />
          </div>
          <div className="absolute top-40 right-[15%] text-purple-100 animate-float-slow">
            <Cloud size={48} />
          </div>
          
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] 
                         bg-gradient-to-b from-blue-200/10 via-purple-200/10 to-pink-200/10 
                         rounded-full blur-3xl transform -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left space-y-8 relative z-10">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="gradient-text">Creating Happy</span>
                  <span className="block mt-2 text-[hsl(var(--primary))]">
                    Little Smiles
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
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
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
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

            {/* Logo Side with Enhanced Integration */}
            <div className="relative group">
              {/* Main Glow Effect */}
              <div className="absolute inset-0 scale-110">
                <div className="absolute inset-0 bg-gradient-to-r 
                               from-blue-200/40 via-purple-200/40 to-pink-200/40 
                               rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-r 
                               from-blue-100/30 via-white/50 to-purple-100/30 
                               rounded-full blur-2xl mix-blend-overlay"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full 
                             bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                    style={{
                      top: `${20 + Math.sin(i) * 50}%`,
                      left: `${20 + Math.cos(i) * 50}%`,
                      animation: `float ${3 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>

              {/* Logo Image - Borderless with Soft Edges */}
              <div className="relative z-10 transform group-hover:scale-105 
                            transition-all duration-700">
                <img 
                  src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                  alt="Growing Smiles Children's Dentistry" 
                  className="w-full h-auto max-w-2xl mx-auto 
                           filter drop-shadow-2xl 
                           transition-transform duration-700
                           select-none mask-fade-bottom"
                />
                
                {/* Subtle Highlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr 
                              from-white/0 via-white/30 to-white/0 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-700"></div>
              </div>

              {/* Interactive Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-white/80"
                    style={{
                      top: `${30 + (i * 20)}%`,
                      left: `${40 + (i * 10)}%`,
                      animation: `float ${2 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                      filter: 'blur(1px)'
                    }}
                  />
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
