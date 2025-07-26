import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, Phone, MapPin } from "lucide-react";
import { useState } from "react";

type NavigationItem = {
  name: string;
  href: string;
  download?: boolean;
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Meet our Dentist', href: '/dentist' },
    { name: 'Refer a Patient', href: '/refer' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Navigation Links - Left Side */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.download ? (
                <a
                  key={item.name}
                  href={item.href}
                  download
                  className="nav-link text-lg font-medium transition-all duration-300 text-gray-700 hover:text-primary"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link text-lg font-medium transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'text-primary after:scale-x-100' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Center Right */}
          <div className="flex items-center space-x-6">

            {/* Need immediate assistance section */}
            <div className="hidden md:block">
              <p className="text-right text-sm font-medium text-gray-700 mb-1">Need immediate assistance?</p>
              <div className="flex gap-2">
                <a 
                  href="tel:519-800-4500" 
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call 519-800-4500
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-1 border border-purple-500 text-purple-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-purple-50 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Location
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:text-primary hover:bg-purple-50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.download ? (
                  <a
                    key={item.name}
                    href={item.href}
                    download
                    className="px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 text-gray-700 hover:text-primary hover:bg-purple-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-primary bg-purple-50 border border-purple-200'
                        : 'text-gray-700 hover:text-primary hover:bg-purple-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-4 py-3">
                <p className="font-medium text-gray-700 mb-2">Need immediate assistance?</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:519-800-4500" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    Call 519-800-4500
                  </a>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 border border-purple-500 text-purple-600 px-4 py-2 rounded-md font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MapPin className="w-4 h-4" />
                    View Location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;