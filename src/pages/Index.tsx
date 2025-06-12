import { Link } from "react-router-dom";
import { Phone, MapPin, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
    {/* Header - Removed logo for cleaner navigation */}
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-end items-center py-4"> {/* Changed to justify-end since no logo */}
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

    {/* Enhanced Logo Hero Section - Made more impactful */}
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
    {/* Large Logo Background - Subtle branding */}
    <div className="absolute inset-0 flex items-center justify-center">
    <img 
    src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
    alt="Logo Background" 
    className="w-full h-full object-contain opacity-[0.02] scale-150"
    />
    </div>
    
    {/* Decorative Pattern Overlay */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f0f9ff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="text-center max-w-4xl mx-auto">
    {/* Main Logo - Made significantly larger and more prominent */}
    <div className="mb-16"> {/* Increased margin for better spacing */}
    <img 
    src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
    alt="Growing Smiles Children's Dentistry Logo" 
    className="h-40 lg:h-64 w-auto mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" // Significantly larger with hover effect
    />
    </div>

    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
    Gentle Pediatric Dental Care in{" "}
    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    Windsor
    </span>
    </h1>
    <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
    Healthy smiles start early. We care for your children's dental needs with a friendly, 
    comfortable, and caring environment that makes every visit a positive experience.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <Link 
    to="/contact"
    className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
    >
    Contact Us
    </Link>
    <Link 
    to="/services"
    className="border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
    >
    Our Services
    </Link>
    </div>
    </div>
    </div>
    
    {/* Enhanced decorative elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
    </section>

    {/* Rest of the sections remain the same but footer modified */}
    {/* ... Previous sections ... */}

    {/* Footer - Simplified without logo */}
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
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

export default Index;
