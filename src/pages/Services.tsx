
import { Link } from "react-router-dom";
import { Users, Shield, Heart, Star, Calendar, CheckCircle, Award, Baby } from "lucide-react";
import Navbar from '../components/NavBar';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Services
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Contact
              </Link>
              <Link 
                to="/appointment" 
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32 overflow-hidden">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Logo Backdrop" 
            className="w-96 h-96 object-contain transform scale-150"
          />
        </div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f0f9ff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              Comprehensive pediatric dental care designed with your child's comfort and health in mind.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white relative">
        {/* Subtle Logo Brand Mark */}
        <div className="absolute top-8 right-8 opacity-5">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Brand Mark" 
            className="w-24 h-24 object-contain"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Growing Smiles?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional pediatric dental care that both parents trust and children love</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gentle Care</h3>
              <p className="text-gray-600 leading-relaxed">Compassionate approach designed specifically for children's comfort and wellbeing</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">Experienced pediatric dental specialists dedicated to your child's oral health</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Baby className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kid-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">Fun, welcoming environment that makes dental visits something to look forward to</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute bottom-0 right-0 opacity-5 transform translate-x-1/4 translate-y-1/4">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Background Logo" 
            className="w-80 h-80 object-contain"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Pediatric Dental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive dental care designed specifically for children and teens, 
              delivered with gentle expertise and a caring touch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Preventive Dental Care",
                description: "Regular checkups and cleanings to keep your child's teeth healthy and strong for life.",
                image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop"
              },
              {
                icon: Users,
                title: "Dental Exams & Cleanings",
                description: "Thorough examinations and professional cleanings in our kid-friendly environment.",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop"
              },
              {
                icon: Heart,
                title: "Fluoride Treatments",
                description: "Safe and effective fluoride applications to strengthen tooth enamel and prevent decay.",
                image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop"
              },
              {
                icon: Shield,
                title: "Dental Sealants",
                description: "Protective coatings to prevent cavities in hard-to-reach areas of back teeth.",
                image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop"
              },
              {
                icon: Users,
                title: "Early Orthodontic Evaluation",
                description: "Assessment and guidance for proper teeth alignment and healthy jaw development.",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop"
              },
              {
                icon: Star,
                title: "Emergency Care",
                description: "Prompt, gentle care for dental emergencies when your child needs us most.",
                image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Logo Backdrop" 
            className="w-64 h-64 object-contain"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Schedule Your Child's Visit?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join our family of happy patients and give your child the gift of a healthy, beautiful smile.
            </p>
            
            <Link 
              to="/appointment"
              className="inline-block bg-white text-primary px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <span className="flex items-center gap-2 justify-center">
                <Calendar className="w-5 h-5" />
                Request Appointment
              </span>
            </Link>
          </div>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Subtle Logo in Footer */}
        <div className="absolute top-4 right-4 opacity-10">
          <img 
            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
            alt="Footer Logo" 
            className="w-16 h-16 object-contain brightness-0 invert"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-semibold">Growing Smiles Children's Dentistry</h3>
              <p className="text-gray-300 text-lg">1400 Front Rd, Windsor ON N9J 2B3</p>
              <p className="text-gray-300 text-lg">Phone: 519-800-4500</p>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Growing Smiles Children's Dentistry. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
