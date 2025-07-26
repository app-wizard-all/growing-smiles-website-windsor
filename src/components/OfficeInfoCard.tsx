import { useState, useEffect, ReactNode } from 'react';
import { Clock, MapPin, Phone, Info } from 'lucide-react';
import InfoPopup from './InfoPopup';

interface CardProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}

const OfficeInfoCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  
  // Define the cards to alternate between
  const cards: CardProps[] = [
    // Hours & Location Info
    {
      title: "Our Location",
      icon: <MapPin className="w-5 h-5" />,
      content: (
        <div className="text-sm">
          <p className="font-medium text-gray-900">Growing Smiles Children's Dentistry</p>
          <p>1400 Front Rd</p>
          <p>Windsor, ON N9J 2B3</p>
          <p className="mt-2 text-purple-600 font-medium">
            <a 
              href="/locate-us"
              className="inline-flex items-center hover:underline"
            >
              Get Directions <span className="ml-1">→</span>
            </a>
          </p>
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
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Monday</span>
            <span>9am-5pm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Tuesday</span>
            <span>9am-5pm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Wednesday</span>
            <span>10am-6pm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Thursday</span>
            <span>9am-5pm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Friday</span>
            <span>8am-1pm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Saturday</span>
            <span>By appt.</span>
          </div>
          <div className="flex justify-between col-span-2 mt-1">
            <span className="font-medium">Sunday</span>
            <span>Closed</span>
          </div>
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
        <div className="text-center space-y-2">
          <p className="font-bold text-xl text-purple-700">519-800-4500</p>
          <div className="text-sm text-gray-600">
            <p>For appointments, inquiries,</p>
            <p>or emergency dental care</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = 'tel:519-800-4500';
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 mt-2"
          >
            Call Now
          </button>
        </div>
      ),
      gradientFrom: "from-teal-500",
      gradientTo: "to-blue-500",
      iconColor: "text-teal-600",
    }
  ];
  
  // Rotate through the cards every few seconds
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 7000); // Change every 7 seconds
    
    return () => {
      clearInterval(rotationTimer);
    };
  }, [cards.length]);
  
  // Get the current card
  const currentCard = cards[activeIndex];
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden w-full h-full animate-fade-in">
        <div className={`h-full flex flex-col`}>
          {/* Header */}
          <div className={`bg-gradient-to-r ${currentCard.gradientFrom} ${currentCard.gradientTo} px-4 py-3 flex items-center`}>
            <div className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 ${currentCard.iconColor}`}>
              {currentCard.icon}
            </div>
            <h3 className="font-bold text-white text-lg">{currentCard.title}</h3>
          </div>
          
          {/* Content with fade transition */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div 
              key={activeIndex} 
              className="animate-fade-in flex-1"
            >
              {currentCard.content}
            </div>
            
            {/* View details button */}
            <div className="mt-4">
              <button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-md text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setShowPopup(true)}
              >
                <Info className="w-4 h-4" />
                <span>View Full Details</span>
              </button>
              
              {/* Progress dots */}
              <div className="flex justify-center mt-3 space-x-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${cards[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Info Popup */}
      <InfoPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
};

export default OfficeInfoCard;