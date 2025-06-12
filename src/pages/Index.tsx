import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Cloud, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Aurora Effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 animate-aurora blur-3xl"></div>
          </div>

          {/* Animated Clouds with Enhanced Effects */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`cloud-${i}`}
              className={`absolute text-white/30 animate-float-circular`}
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 25)}%`,
                animationDelay: `${i * -2}s`,
                filter: 'blur(2px)',
                transform: `scale(${1 + i * 0.2})`
              }}
            >
              <Cloud size={48 + i * 16} />
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left space-y-8 relative z-10">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="gradient-text animate-gradient">
                    Creating Happy
                  </span>
                  <span className="block mt-2 text-[hsl(var(--primary))]">
                    Little Smiles
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Where gentle care meets playful spirits. Making dental visits 
                  an adventure your child looks forward to!
                </p>
              </div>

              {/* Enhanced CTAs */}
              <div className="space-y-8">
                <Link 
                  to="/appointment" 
                  className="group relative inline-flex items-center justify-center gap-3 
                           bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                           text-white text-xl px-12 py-5 rounded-full 
                           font-semibold overflow-hidden"
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sparkle Effects */}
                  <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                      <Sparkles
                        key={i}
                        className="absolute w-4 h-4 text-white/50 animate-twinkle"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <Calendar className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Start Your Journey</span>
                </Link>

                {/* Enhanced Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  {[
                    { icon: Smile, text: "Kid-Friendly", color: "text-blue-500", gradient: "from-blue-500/20" },
                    { icon: Heart, text: "Gentle Care", color: "text-purple-500", gradient: "from-purple-500/20" },
                    { icon: Star, text: "Fun Experience", color: "text-pink-500", gradient: "from-pink-500/20" }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="group relative flex items-center gap-3 px-4 py-2 
                               bg-white/40 backdrop-blur-sm rounded-full
                               shadow-sm hover:shadow-md
                               transform hover:-translate-y-1 
                               transition-all duration-300"
                    >
                      {/* Indicator Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} to-transparent 
                                    opacity-0 group-hover:opacity-100 rounded-full blur-md 
                                    transition-opacity duration-300`}></div>
                      
                      <item.icon className={`w-5 h-5 ${item.color} relative z-10`} />
                      <span className="text-sm font-medium text-gray-700 relative z-10">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Logo Side */}
            <div className="relative group">
              {/* Multi-layered Glow Effect */}
              <div className="absolute inset-0 scale-125">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-purple-300/40 to-pink-300/40 
                               blur-[120px] animate-pulse-glow mix-blend-soft-light"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-white/40 to-purple-200/30 
                               blur-[80px] animate-pulse-glow mix-blend-screen" 
                     style={{ animationDelay: '-2s' }}></div>
              </div>

              {/* Logo Container with Enhanced Blend Modes */}
              <div className="relative z-10 transform group-hover:scale-105 transition-all duration-1000">
                <div className="relative">
                  {/* Main Logo */}
                  <img 
                    src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                    alt="Growing Smiles Children's Dentistry" 
                    className="w-full h-auto max-w-2xl mx-auto 
                             select-none mix-blend-multiply
                             transition-all duration-1000
                             filter contrast-125 brightness-110"
                  />
                  
                  {/* Enhanced Glow Behind Logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-white/30 to-purple-100/20 
                                blur-3xl -z-10 mix-blend-screen"></div>
                </div>

                {/* Dynamic Light Effects */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Particles */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-white/60"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float-gentle ${3 + Math.random() * 4}s ease-in-out infinite`,
                      animationDelay: `${i * -0.2}s`,
                      filter: 'blur(1px)'
                    }}
                  />
                ))}

                {/* Sparkles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`sparkle-${i}`}
                    className="absolute animate-sparkle"
                    style={{
                      top: `${20 + (i * 15)}%`,
                      left: `${20 + (i * 15)}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-white/70" />
                  </div>
                ))}

                {/* Ripple Effects */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`ripple-${i}`}
                    className="absolute w-20 h-20 rounded-full border border-white/20 animate-ripple"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same */}
      {/* ... */}

    </div>
  );
};

export default Index;
