
import { Mail, Phone, MapPin, GraduationCap, Award, Heart, Users } from "lucide-react";
import Navbar from '../components/NavBar';

const Dentist = () => {
  // All backdrop elements including the uploaded image
  const backdropElements = [
    "/lovable-uploads/f5749505-21ce-4e5e-a045-feaab8b7a82b.png", // teal figure
    "/lovable-uploads/28e42270-02db-4ce8-9363-2e0ef2b3499c.png", // purple girl
    "/lovable-uploads/35d275ef-a5f5-4173-890a-03d89aa2bdef.png", // yellow tooth
    "/lovable-uploads/28f60642-0227-4ede-9da6-02e0c713ac32.png", // growing smiles text
    "/lovable-uploads/987ffbe2-6fea-4069-83d6-d10900bd56d4.png"  // uploaded growing smiles
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Backdrop elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-8 ${
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
          {[...Array(4)].map((_, i) => (
            <img
              key={`backdrop-${i}`}
              src={backdropElements[Math.floor(Math.random() * backdropElements.length)]}
              alt=""
              className="absolute opacity-8 animate-float"
              style={{
                width: Math.random() * 50 + 50,
                height: Math.random() * 50 + 50,
                left: `${Math.random() * 70 + 15}%`,
                top: `${Math.random() * 70 + 15}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 20}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Meet Dr. Samita Gumber
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Board-certified pediatric dentist dedicated to creating positive dental experiences for children
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo Section */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">Dr. Samita Gumber (Dr. Sam)</h2>
                
                {/* Doctor's Photo */}
                <div className="relative mb-8">
                  <img 
                    src="/lovable-uploads/553908b6-ed98-41a3-b2f6-aea154e79a6f.png" 
                    alt="Dr. Samita Gumber" 
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">dr.gumber@growingsmiles.ca</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">519-800-4500</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">1400 Front Rd, Windsor ON</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-6">About Dr. Gumber</h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Samita Gumber (Dr. Sam to her patients) is a board-certified pediatric dentist who comes from a diverse background. Dr. Gumber was born and brought up in India, where she completed dental school and graduated with a master's degree in pediatric dentistry.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    She moved to the United States in 2016 and completed her second master's degree in pediatric dentistry at the University of Michigan, Ann Arbor, with her research on children with autism spectrum disorder.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Dr. Gumber firmly believes in giving back to the community and has participated in multiple community dental health programs in India and the United States. She is also an adjunct clinical assistant professor at the University of Michigan School of Dentistry and enjoys teaching undergraduate students and pediatric dentistry residents.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    In her spare time, Dr. Gumber enjoys traveling, outdoor activities, and playing badminton. She is a huge Bhangra (Punjabi Folk dance) and Bollywood fan and loves to dance on Punjabi and Bollywood numbers.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100">
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
