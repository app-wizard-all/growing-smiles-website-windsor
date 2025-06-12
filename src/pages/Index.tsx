import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin, Cloud } from "lucide-react";
import Navbar from '../components/NavBar';
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Index = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section className="relative hero-gradient min-h-screen flex items-center">
        {/* Floating Elements Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Logo Section with Parallax */}
        <div ref={parallaxRef} className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white py-4">
          <motion.div 
            className="w-full flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full" style={{ maxHeight: '15vh' }}>
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png"
                alt="Growing Smiles Children's Dentistry" 
                className="w-full h-full object-contain max-w-5xl mx-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Main Content with Animations */}
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="text-center space-y-8" variants={fadeInUp}>
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold"
                variants={fadeInUp}
              >
                <span className="gradient-text">Creating Happy</span>
                <motion.span 
                  className="block mt-2 text-[hsl(var(--primary))]"
                  variants={fadeInUp}
                >
                  Little Smiles
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Where gentle care meets playful spirits. Making dental visits 
                an adventure your child looks forward to!
              </motion.p>
            </div>

            {/* Animated CTAs */}
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/appointment" className="primary-button animate-pulse-subtle">
                  <Calendar className="w-6 h-6" />
                  <span>Start Your Journey</span>
                </Link>
              </motion.div>

              {/* Animated Trust Indicators */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6"
                variants={staggerContainer}
              >
                {[
                  { icon: Smile, text: "Kid-Friendly", color: "text-blue-500" },
                  { icon: Heart, text: "Gentle Care", color: "text-purple-500" },
                  { icon: Star, text: "Fun Experience", color: "text-pink-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 px-4 py-2 
                             bg-white/50 backdrop-blur-sm rounded-full
                             shadow-sm hover:shadow-md
                             transform hover:-translate-y-1 
                             transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    variants={fadeInUp}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with Scroll Animations */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-white to-blue-50/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Why Families Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating positive dental experiences that last a lifetime
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Magical First Visit",
                description: "A gentle introduction filled with fun surprises",
                icon: Smile,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Caring Approach",
                description: "Expert care delivered with patience and understanding",
                icon: Heart,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "Easy Scheduling",
                description: "Convenient booking that works for your family",
                icon: Calendar,
                gradient: "from-pink-500 to-pink-600"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="card-hover group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`w-16 h-16 mb-6 rounded-xl 
                              bg-gradient-to-r ${item.gradient} 
                              flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section with Hover Effects */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-blue-50/50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold">
                Ready to Join Our
                <motion.span 
                  className="block gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  Dental Family?
                </motion.span>
              </h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-white rounded-xl
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 
                           transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Call us at</p>
                    <span className="text-xl font-semibold text-gray-900">
                      519-800-4500
                    </span>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-white rounded-xl
                           shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 
                           transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MapPin className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-600">Visit us at</p>
                    <span className="text-xl font-semibold text-gray-900">
                      1400 Front Rd, Windsor ON
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="text-center lg:text-right"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/appointment" className="primary-button">
                  <Calendar className="w-6 h-6" />
                  <span>Book Your Visit Now</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-white border-t border-gray-100 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Growing Smiles Children's Dentistry. 
              All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
