
import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  'https://ik.imagekit.io/kn6auymih/a-high-resolution-macro-photograph-showc_vtRHuMVySOOUdEtEVlrTRA_MLmK-eCERCyHITT4apKGRw.jpeg?updatedAt=1762476658053',
  'https://ik.imagekit.io/kn6auymih/a-macro-photograph-of-an-elegant-woman-s_X3TojhAxTlOxpFYvZy-W9w_MLmK-eCERCyHITT4apKGRw.jpeg?updatedAt=1762476598168',
  'https://ik.imagekit.io/kn6auymih/a-macro-photograph-of-a-woman-s-hand-sho_ShXTatNRQBCiFn7uj7XFHQ_MLmK-eCERCyHITT4apKGRw.jpeg?updatedAt=1762476597629',
  'https://ik.imagekit.io/kn6auymih/a-professional-macro-photograph-of-a-wom_YBmT6sWYTFSuV1NsCiHcSw_MLmK-eCERCyHITT4apKGRw.jpeg?updatedAt=1762476597074'
];

const slideAltTexts = [
    "Premium shimmering pink nail polish texture macro close-up - Nailsorials",
    "Elegant salon-quality gel manicure on woman's hand holding fabric",
    "Close-up detail of polished fingernails featuring professional nail art",
    "Professional macro photography of nail care and beauty tools setup"
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="w-full h-80 md:h-96 lg:h-[500px] relative overflow-hidden flex items-center justify-center text-center">
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
            currentIndex === slideIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={currentIndex !== slideIndex}
        >
          <img 
            src={slide} 
            alt={slideAltTexts[slideIndex]} 
            className="w-full h-full object-cover filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      ))}
      
      {/* Bottom White Shadow Blend */}
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-20 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-20 text-white px-4 max-w-4xl lg:max-w-none lg:w-full">
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] xl:text-[7.5rem] leading-none font-fiolex drop-shadow-lg mb-6 lg:whitespace-nowrap lg:px-4">
            Salon-Quality Nails at Home
        </h1>
        <p className="text-sm md:text-lg mt-4 max-w-2xl mx-auto drop-shadow-md font-medium leading-relaxed">
            Discover the ultimate destination for DIY manicures. Master the art of salon-grade nails with our premium dip powder, gel polish, and press-on nail kits. Learn to create stunning nail art and build your custom kit today.
        </p>
      </div>
    </div>
  );
};
