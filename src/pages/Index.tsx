import { Link } from "react-router-dom";
import { Phone, MapPin, Calendar, Smile, Heart, Star, Sun, Cloud, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-gradient-shift"></div>

      {/* Floating Elements Container - Always visible */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Animated bubbles */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full mix-blend-multiply animate-float-${i} opacity-20`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                backgroundColor: ['#60A5FA', '#F472B6', '#34D399', '#FBBF24'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Enhanced Header with Glassmorphism */}
        <header className="bg-white/20 backdrop-blur-lg sticky top-0 z-50 border-b border-white/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center py-4">
              <nav className="hidden md:flex space-x-8 items-center">
                {['Home', 'Services', 'Contact'].map((item, index) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="relative group text-gray-700 font-medium px-4 py-2"
                  >
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {item}
                    </span>
                    <div className="absolute inset-0 bg-white/40 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                ))}
                <Link 
                  to="/appointment" 
                  className="relative group overflow-hidden bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full"
                >
                  <span className="relative z-10 text-white flex items-center gap-2 group-hover:text-white transition-colors">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section with Integrated Logo */}
        <section className="relative min-h-screen py-20 flex items-center">
          {/* Radial gradient behind logo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/0.2),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Logo Section with Enhanced Integration */}
              <div className="relative group">
                {/* Animated background elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
                
                {/* Sparkles */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-sparkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </div>
                ))}

                {/* Main Logo */}
                <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                    alt="Growing Smiles Children's Dentistry Logo" 
                    className="h-64 lg:h-96 xl:h-[32rem] w-auto mx-auto lg:mx-0 drop-shadow-2xl"
                  />
                  
                  {/* Animated border */}
                  <div className="absolute -inset-4 border-4 border-primary/20 rounded-full animate-border-flow"></div>
                </div>

                {/* Info Card with Glassmorphism */}
                <div className="mt-8 backdrop-blur-md bg-white/30 rounded-3xl p-6 shadow-xl border border-white/50 transform group-hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    Growing Smiles
                  </h3>
                  <p className="text-lg text-gray-700/90">Children's Dentistry</p>
                </div>
              </div>

              {/* Content Section with Enhanced Animations */}
              <div className="text-center lg:text-left relative">
                {/* Floating icons with trails */}
                <div className="absolute -top-20 -left-20 w-40 h-40 animate-float-slow">
                  <div className="relative w-full h-full">
                    <Star className="absolute w-8 h-8 text-yellow-400 animate-spin-slow" />
                    <div className="absolute w-8 h-8 bg-yellow-400/20 rounded-full blur-md animate-trail"></div>
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-text">
                    Making Dental Visits
                  </span>
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-pink-500 to-primary animate-gradient-text-delayed">
                    Magical & Fun!
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-700/90 mb-12 leading-relaxed animate-fade-in-up">
                  We create happy, healthy smiles in a gentle and caring environment 
                  that kids love and parents trust.
                </p>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  {/* Contact Button */}
                  <Link 
                    to="/contact"
                    className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary"
                  >
                    <span className="relative z-10 text-white flex items-center justify-center gap-2 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5" />
                      Contact Us
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  {/* Services Button */}
                  <Link 
                    to="/services"
                    className="group relative overflow-hidden px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-secondary"
                  >
                    <span className="relative z-10 text-secondary flex items-center justify-center gap-2 group-hover:scale-110 transition-transform duration-300">
                      <Sun className="w-5 h-5" />
                      Our Services
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add the rest of your sections here with similar enhancements */}
      </div>
    </div>
  );
};

// Add these animations to your CSS
const cssAdditions = `
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes border-flow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes sparkle {
  0%, 100% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
}

@keyframes trail {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(2); opacity: 0; }
}

@keyframes gradient-text {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-shift {
  animation: gradient-shift 15s ease infinite;
  background-size: 400% 400%;
}

.animate-border-flow {
  animation: border-flow 8s linear infinite;
}

.animate-sparkle {
  animation: sparkle 2s ease-in-out infinite;
}

.animate-trail {
  animation: trail 2s ease-out infinite;
}

.animate-gradient-text {
  animation: gradient-text 4s ease infinite;
  background-size: 200% auto;
}

.animate-gradient-text-delayed {
  animation: gradient-text 4s ease infinite;
  animation-delay: 0.5s;
  background-size: 200% auto;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

/* Add more custom animations as needed */
`;

export default Index;
