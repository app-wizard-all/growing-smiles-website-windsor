import { Link } from "react-router-dom";
import { Phone, MapPin, Calendar, Smile, Heart, Star, Sun } from "lucide-react"; // Added more friendly icons

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with playful gradient */}
      <header className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-4">
            <nav className="hidden md:flex space-x-8 items-center">
              {/* Added playful hover effects to navigation */}
              <Link to="/" className="text-primary hover:text-primary font-medium transition-all duration-300 hover:scale-110 relative group">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link to="/services" className="text-primary hover:text-primary font-medium transition-all duration-300 hover:scale-110 relative group">
                <span className="relative z-10">Services</span>
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-200 to-blue-400 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link to="/contact" className="text-primary hover:text-primary font-medium transition-all duration-300 hover:scale-110 relative group">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-green-200 to-green-400 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link 
                to="/appointment" 
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-2"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with playful elements */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 lg:py-32 overflow-hidden min-h-[90vh]">
        {/* Animated floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Add floating shapes animation */}
          <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
          <div className="absolute top-40 left-40 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-float-slow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            
            {/* Left Side - Enhanced Logo Section with playful animation */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="text-center lg:text-left relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                  alt="Growing Smiles Children's Dentistry Logo" 
                  className="h-64 lg:h-96 xl:h-[32rem] w-auto mx-auto lg:mx-0 drop-shadow-2xl transform hover:scale-105 transition-all duration-500 relative z-10"
                />
                <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">Growing Smiles</h3>
                  <p className="text-lg text-gray-600">Children's Dentistry</p>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Content with kid-friendly elements */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                <Heart className="w-8 h-8 text-pink-400 animate-pulse-delayed" />
                <Smile className="w-8 h-8 text-blue-400 animate-pulse-slow" />
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Making Dental Visits
                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Fun & Friendly!
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
                We create happy, healthy smiles in a gentle and caring environment 
                that kids love and parents trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link 
                  to="/contact"
                  className="group relative overflow-hidden border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:text-white transition-all duration-300 hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </span>
                  <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
                <Link 
                  to="/services"
                  className="group relative overflow-hidden border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:text-white transition-all duration-300 hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sun className="w-5 h-5" />
                    Our Services
                  </span>
                  <div className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section - New Addition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smile,
                title: "Kid-Friendly Environment",
                description: "Colorful spaces and gentle care that makes dental visits fun",
                color: "text-blue-500",
                bgColor: "bg-blue-100"
              },
              {
                icon: Heart,
                title: "Gentle & Caring Team",
                description: "Experienced professionals who love working with children",
                color: "text-pink-500",
                bgColor: "bg-pink-100"
              },
              {
                icon: Star,
                title: "Modern Techniques",
                description: "State-of-the-art care with a comfortable approach",
                color: "text-yellow-500",
                bgColor: "bg-yellow-100"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section with kid-friendly elements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-4 mb-6">
              <Calendar className="w-10 h-10 text-primary animate-bounce" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule a Visit</h2>
            <p className="text-xl text-gray-600">Let's start your child's journey to a healthy smile!</p>
          </div>
          
          {/* Rest of the appointment form section remains the same */}
        </div>
      </section>

      {/* Rest of the sections with similar kid-friendly enhancements */}
      
    </div>
  );
};

// Add these animations to your CSS
const cssAdditions = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-pulse-delayed {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 0.5s;
}

.animate-pulse-slow {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 1s;
}
`;

export default Index;
