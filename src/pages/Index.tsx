
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Users, Shield, Heart, Star, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
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
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Home
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Contact
              </Link>
              <Link 
                to="/appointment" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f0f9ff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Gentle Pediatric Dental Care in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Windsor
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Healthy smiles start early. We care for your children's dental needs with a friendly, 
              comfortable, and caring environment that makes every visit a positive experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/appointment"
                className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:from-primary/90 hover:to-secondary/90"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </span>
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-primary hover:text-primary transition-all hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Gentle Care</h3>
              <p className="text-gray-600">Compassionate approach designed specifically for children</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Professional Team</h3>
              <p className="text-gray-600">Experienced pediatric dental specialists you can trust</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kid-Friendly</h3>
              <p className="text-gray-600">Fun, comfortable environment that children love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                description: "Regular checkups and cleanings to keep your child's teeth healthy and strong for life."
              },
              {
                icon: Users,
                title: "Dental Exams & Cleanings",
                description: "Thorough examinations and professional cleanings in our kid-friendly environment."
              },
              {
                icon: Heart,
                title: "Fluoride Treatments",
                description: "Safe and effective fluoride applications to strengthen tooth enamel and prevent decay."
              },
              {
                icon: Shield,
                title: "Dental Sealants",
                description: "Protective coatings to prevent cavities in hard-to-reach areas of back teeth."
              },
              {
                icon: Users,
                title: "Early Orthodontic Evaluation",
                description: "Assessment and guidance for proper teeth alignment and healthy jaw development."
              },
              {
                icon: Star,
                title: "Emergency Care",
                description: "Prompt, gentle care for dental emergencies when your child needs us most."
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Schedule Your Child's Visit?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join our family of happy patients and give your child the gift of a healthy, beautiful smile.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-sm">Call us today</p>
                  <p className="text-xl font-semibold">519-800-4500</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-sm">Visit us at</p>
                  <p className="text-xl font-semibold">1400 Front Rd, Windsor ON</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/appointment"
              className="inline-block bg-white text-primary px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Request Appointment
            </Link>
          </div>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-xl font-semibold">Growing Smiles Children's Dentistry</p>
              <p className="text-gray-400">1400 Front Rd, Windsor ON N9J 2B3</p>
              <p className="text-gray-400">Phone: 519-800-4500</p>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Growing Smiles Children's Dentistry. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
