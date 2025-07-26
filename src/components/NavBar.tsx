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
    { name: 'Locate Us', href: '/locate-us' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-md relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-200 rounded-full opacity-30"></div>
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-teal-200 rounded-full opacity-30"></div>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Navigation Links - Left Side */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mr-4">
              <a 
                href="https://www.instagram.com/growing_smiles_windsor_lasalle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 p-1.5 rounded-full hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-700 p-1.5 rounded-full hover:bg-blue-800 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
            
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
                  className={`nav-link text-lg font-medium transition-all duration-300 relative ${
                    isActive(item.href) 
                      ? 'text-purple-600 after:scale-x-100' 
                      : 'text-purple-700 hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Center Right */}
          <div className="flex items-center space-x-6">

            {/* Contact buttons */}
            <div className="hidden md:block">
              <div className="flex gap-2">
                <a 
                  href="tel:519-800-4500" 
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Call 519-800-4500</span>
                </a>
                <div className="inline-flex items-center gap-1 text-purple-600 px-3 py-1 rounded-md text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>1400 Front Rd, LaSalle</span>
                </div>
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
                        ? 'text-purple-600 bg-purple-50 border border-purple-200'
                        : 'text-purple-700 hover:text-teal-600 hover:bg-purple-50'
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
                    to="/locate-us" 
                    className="inline-flex items-center gap-2 border border-purple-500 text-purple-600 px-4 py-2 rounded-md font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MapPin className="w-4 h-4" />
                    Locate Us
                  </Link>
                </div>
                
                {/* Social Media Icons - Mobile */}
                <div className="mt-4 flex items-center justify-around pt-4 border-t border-gray-100">
                  <a 
                    href="https://www.instagram.com/growing_smiles_windsor_lasalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
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