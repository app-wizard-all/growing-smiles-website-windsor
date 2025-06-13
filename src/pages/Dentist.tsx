
import { useState } from "react";
import { Mail, Phone, MapPin, GraduationCap, Award, Heart } from "lucide-react";
import Navbar from '../components/NavBar';

const Dentist = () => {
  const [dentistPhoto, setDentistPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setDentistPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Purple/Pink gradient background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 ${
                i % 3 === 0 
                  ? 'bg-gradient-to-r from-purple-200 to-pink-200' 
                  : i % 3 === 1
                  ? 'bg-gradient-to-r from-teal-200 to-blue-200'
                  : 'bg-gradient-to-r from-pink-200 to-purple-200'
              }`}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Meet Dr. Sarah Johnson
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated pediatric dentist committed to creating positive dental experiences for children
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo Section */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100">
                <h2 className="text-2xl font-bold purple-pink-gradient-text mb-6">Doctor's Photo</h2>
                
                {/* Photo Display/Upload Area */}
                <div className="relative">
                  {dentistPhoto ? (
                    <div className="relative">
                      <img 
                        src={dentistPhoto} 
                        alt="Dr. Sarah Johnson" 
                        className="w-full h-96 object-cover rounded-2xl shadow-lg"
                      />
                      <button 
                        onClick={() => setDentistPhoto(null)}
                        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-purple-300 rounded-2xl p-12 text-center hover:border-purple-400 transition-colors">
                      <div className="space-y-4">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                          <img 
                            src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                            alt="Placeholder" 
                            className="w-16 h-16 object-contain opacity-60"
                          />
                        </div>
                        <div>
                          <label htmlFor="photo-upload" className="cursor-pointer">
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block">
                              Upload Photo
                            </span>
                          </label>
                          <input 
                            id="photo-upload"
                            type="file" 
                            accept="image/*" 
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </div>
                        <p className="text-gray-500">Upload a professional photo</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">dr.johnson@growingsmiles.ca</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-600" />
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
                <h2 className="text-2xl font-bold purple-pink-gradient-text mb-6">About Dr. Johnson</h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Sarah Johnson is a passionate pediatric dentist with over 10 years of experience 
                    in providing gentle, comprehensive dental care for children. She believes that every 
                    child deserves a positive dental experience that sets the foundation for a lifetime 
                    of good oral health.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Johnson completed her Doctor of Dental Surgery degree at the University of Toronto 
                    and went on to specialize in pediatric dentistry at the Hospital for Sick Children. 
                    She is committed to staying current with the latest advances in pediatric dental care 
                    and regularly attends continuing education courses.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    When she's not caring for her young patients, Dr. Johnson enjoys spending time with 
                    her own family, reading, and volunteering in the community. She is fluent in English 
                    and French, allowing her to serve Windsor's diverse community.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100">
                <h3 className="text-xl font-bold purple-pink-gradient-text mb-6">Education & Credentials</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Doctor of Dental Surgery</h4>
                      <p className="text-gray-600">University of Toronto Faculty of Dentistry</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pediatric Dentistry Specialty</h4>
                      <p className="text-gray-600">Hospital for Sick Children, Toronto</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Royal College of Dental Surgeons</h4>
                      <p className="text-gray-600">Licensed in Ontario</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
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
