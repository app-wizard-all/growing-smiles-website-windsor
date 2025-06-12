import { Link } from "react-router-dom";
import { Calendar, Smile, Heart, Star, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-4">
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative hero-gradient min-h-[90vh] flex items-center">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--accent))/30] rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[hsl(var(--accent))/30] rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-[hsl(var(--foreground))]">
                Creating Happy
                <span className="block mt-2 text-[hsl(var(--primary))]">
                  Little Smiles
                </span>
              </h1>
              
              <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
                Gentle pediatric dental care in a fun, friendly environment 
                that makes every visit a positive experience.
              </p>

              {/* Main CTA */}
              <div className="space-y-6">
                <Link to="/appointment" className="primary-button">
                  <Calendar className="w-6 h-6" />
                  <span>Book Your Visit</span>
                </Link>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                  {[
                    { icon: Smile, text: "Kid-Friendly" },
                    { icon: Heart, text: "Gentle Care" },
                    { icon: Star, text: "Expert Team" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
                      <item.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logo Side */}
            <div className="logo-container">
              <div className="logo-glow"></div>
              <img 
                src="/lovable-uploads/938ec48e-ee62-43b3-9547-0f51ac679f34.png" 
                alt="Growing Smiles Children's Dentistry" 
                className="logo-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "First Visit",
                description: "Gentle introduction to dental care in a fun environment",
                icon: Smile,
              },
              {
                title: "Expert Care",
                description: "Specialized pediatric dental team for your child",
                icon: Heart,
              },
              {
                title: "Easy Booking",
                description: "Simple online scheduling for your convenience",
                icon: Calendar,
              }
            ].map((item, index) => (
              <div key={index} className="card-hover p-8">
                <div className="w-12 h-12 bg-[hsl(var(--primary))/10] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">{item.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[hsl(var(--accent))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--foreground))]">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />
                  <span className="text-xl text-[hsl(var(--foreground))]">519-800-4500</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                  <span className="text-xl text-[hsl(var(--foreground))]">1400 Front Rd, Windsor ON</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/appointment" className="primary-button">
                <Calendar className="w-6 h-6" />
                <span>Book Appointment Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--background))] border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[hsl(var(--muted-foreground))]">
              © {new Date().getFullYear()} Growing Smiles Children's Dentistry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
