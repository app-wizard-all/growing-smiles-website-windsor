import { Mail, Phone, MapPin, GraduationCap, Award, Heart, Users } from "lucide-react";
import Navbar from '../components/NavBar';

const Dentist = () => {
  // Updated backdrop elements with new images
  const backdropElements = [
    "/lovable-uploads/03a5d35e-4d5d-40e4-8d1f-4b18d3a64f1d.png", // teal figure
    "/lovable-uploads/2eaa7db3-f461-4c7d-8044-68293e0cc878.png", // purple girl
    "/lovable-uploads/ab84c1cf-b7dd-4114-8ffb-44fcd62c5c7a.png", // yellow tooth
    "/lovable-uploads/44d4c24c-7e2f-49ee-9bf1-006f4744da04.png", // growing smiles text
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Backdrop elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-12 ${
                i % 4 === 0 
                  ? 'bg-gradient-to-r from-teal-200 to-blue-200' 
                  : i % 4 === 1
                  ? 'bg-gradient-to-r from-purple-200 to-pink-200'
                  : i % 4 === 2
                  ? 'bg-gradient-to-r from-pink-200 to-purple-200'
                  : 'bg-gradient-to-r from-blue-200 to-teal-200'
              }`}
              style={{
                width: Math.random() * 60 + 40,
                height: Math.random() * 60 + 40,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
          
          {/* Logo backdrop elements */}
          {[...Array(6)].map((_, i) => (
            <img
              key={`backdrop-${i}`}
              src={backdropElements[Math.floor(Math.random() * backdropElements.length)]}
              alt=""
              className="absolute opacity-12 animate-float"
              style={{
                width: Math.random() * 60 + 50,
                height: Math.random() * 60 + 50,
                left: `${Math.random() * 70 + 15}%`,
                top: `${Math.random() * 70 + 15}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 20}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
  
          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-16 items-stretch">
            {/* Photo Section */}
            <div className="space-y-8 lg:col-span-2 flex flex-col">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100 flex-1">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">Dr. Samita Gumber (Dr. Sam)</h2>
                
                {/* Doctor's Photo */}
                <div className="relative mb-8">
                  <img 
                    src="/lovable-uploads/Samita-2.jpg" 
                    alt="Dr. Samita Gumber" 
                    className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">info@thegrowingsmiles.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">519-800-4500</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">1400 Front Rd, LaSalle ON</span>
                  </div>
                </div>
                
                {/* Credentials */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">Education & Credentials</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Master's Degree in Pediatric Dentistry</h4>
                      <p className="text-gray-600">University of Michigan, Ann Arbor</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Master's Degree in Pediatric Dentistry</h4>
                      <p className="text-gray-600">Dental School, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adjunct Clinical Assistant Professor</h4>
                      <p className="text-gray-600">University of Michigan School of Dentistry</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Memberships</h4>
                      <p className="text-gray-600">AAPD, MAPD, ODA, and RCDSO</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Service</h4>
                      <p className="text-gray-600">Multiple community dental health programs in India and the United States</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-center text-gray-500 italic">
                    "I believe every child deserves a dental home where they feel safe, understood, and cared for."
                  </p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-8 lg:col-span-3 flex flex-col">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100 flex-1">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-6">About Dr. Gumber</h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Samita Gumber (Dr. Sam to her patients) is a Board-Certified Pediatric Dentist who brings mighty care to tiny teeth—with expertise, empathy, and a whole lot of heart.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Her journey into dentistry began in India, where she first discovered her passion for pediatric dental care. She earned her first Master's degree in Pediatric Dentistry from India, followed by a second Master's degree from the University of Michigan, Ann Arbor. This unique blend of international training has given her valuable insight into child behavior. She draws on this experience and approaches every interaction with a child with openness and curiosity, turning each moment into an opportunity to connect, learn, and build their confidence along the way.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Dr. Sam is deeply passionate about dental care for children with special health care needs. With a keen awareness of the unique challenges these children and their families may face, she is dedicated to creating an inclusive, understanding, and accommodating dental experience for every child.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    With six years of specialized training and over four years of hands-on clinical experience, Dr. Sam is thrilled to open her very own pediatric dental practice. Located in LaSalle, the clinic warmly welcomes families from across Windsor-Essex and neighboring communities, offering high-quality, compassionate care tailored to each child's needs.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Gumber is in good standing with the Royal College of Dental Surgeons of Ontario, the Ontario Dental Association, the American Academy of Pediatric Dentistry, and the American Board of Pediatric Dentistry. She also gives back to the local dental community through volunteer work with the Essex County Dental Society.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    When she's not in the office, Dr. Sam is soaking up life's little joys—like a quiet cup of tea with her husband (a rare treat with their two toddlers on the loose). These moments help melt away the stress and recharge her for whatever comes next.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Dr Sam is excited to help nurture growing smiles in our community.
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-center text-gray-500 italic">
                    "Bringing mighty care to tiny teeth—with expertise, empathy, and heart."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-900 via-purple-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry Logo" 
                className="h-16 w-auto mx-auto brightness-0 invert opacity-80"
              />
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://www.instagram.com/growing_smiles_windsor_lasalle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#"
                className="text-purple-300 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#"
                className="text-purple-300 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-purple-300">
              © {new Date().getFullYear()} Growing Smiles Children's Dentistry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dentist;
