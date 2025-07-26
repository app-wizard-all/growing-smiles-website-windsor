import { useState, useEffect, ReactNode } from 'react';
import { Clock, MapPin, Phone, Info, Smile, Heart, Star, Shield, Sparkles } from 'lucide-react';
import InfoPopup from './InfoPopup';

interface CardProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}

const AnimatedInfoCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  // Define the cards to alternate between
  const cards: CardProps[] = [
    // Trust Indicator Cards
    {
      title: "Kid-Friendly",
      icon: <Smile className="w-5 h-5" />,
      content: "Fun, welcoming environment designed especially for children",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      iconColor: "text-purple-600",
    },
    {
      title: "Gentle Care",
      icon: <Heart className="w-5 h-5" />,
      content: "Expert, caring approach to pediatric dental health",
      gradientFrom: "from-teal-500",
      gradientTo: "to-blue-500",
      iconColor: "text-teal-600",
    },
    {
      title: "Fun Experience",
      icon: <Sparkles className="w-5 h-5" />,
      content: "Making dental visits enjoyable and stress-free",
      gradientFrom: "from-pink-500",
      gradientTo: "to-purple-500", 
      iconColor: "text-pink-600",
    },
    {
      title: "Safe & Secure",
      icon: <Shield className="w-5 h-5" />,
      content: "Professional pediatric care you can trust",
      gradientFrom: "from-blue-500",
      gradientTo: "to-teal-500",
      iconColor: "text-blue-600",
    },
    // Hours & Location Info
    {
      title: "Our Location",
      icon: <MapPin className="w-5 h-5" />,
      content: (
        <div className="text-sm">
          <p>1400 Front Rd</p>
          <p>Windsor, ON N9J 2B3</p>
        </div>
      ),
      gradientFrom: "from-purple-500",
      gradientTo: "to-teal-500",
      iconColor: "text-teal-600",
    },
    {
      title: "Office Hours",
      icon: <Clock className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-2 gap-x-2 gap-y-0 text-xs">
          <p>Mon: 9am-5pm</p>
          <p>Tue: 9am-5pm</p>
          <p>Wed: 10am-6pm</p>
          <p>Thu: 9am-5pm</p>
          <p>Fri: 8am-1pm</p>
          <p>Sat: By appt.</p>
        </div>
      ),
      gradientFrom: "from-pink-500",
      gradientTo: "to-purple-500",
      iconColor: "text-pink-600",
    },
    {
      title: "Contact Us",
      icon: <Phone className="w-5 h-5" />,
      content: (
        <div>
          <p className="font-medium text-purple-700">519-800-4500</p>
          <p className="text-xs text-gray-600">Call for appointments</p>
        </div>
      ),
      gradientFrom: "from-teal-500",
      gradientTo: "to-blue-500",
      iconColor: "text-teal-600",
    }
  ];
  
  // Rotate through the cards every few seconds
  useEffect(() => {
    // Make the card visible after a short delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    // Start rotation timer
    const rotationTimer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 5000); // Change every 5 seconds
    
    return () => {
      clearTimeout(visibilityTimer);
      clearInterval(rotationTimer);
    };
  }, [cards.length]);
  
  // Get the current card
  const currentCard = cards[activeIndex];
  
  return (
    <>
      {/* Animated Card */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-700 transform ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div 
          className={`bg-white rounded-xl shadow-xl w-64 overflow-hidden transition-all duration-500 ${
            isExpanded ? 'shadow-2xl' : ''
          }`}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${currentCard.gradientFrom} ${currentCard.gradientTo} px-4 py-3 flex items-center cursor-pointer`}>
            <div className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 ${currentCard.iconColor}`}>
              {currentCard.icon}
            </div>
            <h3 className="font-bold text-white">{currentCard.title}</h3>
          </div>
          
          {/* Content with fade transition */}
          <div className="p-4 overflow-hidden relative">
            <div 
              key={activeIndex} 
              className="animate-fade-in"
            >
              {currentCard.content}
            </div>
            
            {/* Info button - only show on location or hours cards */}
            {activeIndex >= 4 && (
              <button
                className="mt-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-1"
                onClick={() => setShowPopup(true)}
              >
                <Info className="w-4 h-4" />
                <span>View Full Details</span>
              </button>
            )}
            
            {/* Progress dots */}
            <div className="flex justify-center mt-3 space-x-1">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Pulsing Circle */}
        <div 
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
            isExpanded ? 'opacity-0' : 'animate-ping'
          } ${currentCard.gradientFrom.replace('from-', 'bg-')}`}
        />
      </div>
      
      {/* Info Popup */}
      <InfoPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
};

export default AnimatedInfoCard;