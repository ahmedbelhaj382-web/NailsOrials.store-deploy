
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const messages = [
  '1,000,000+ Happy Customers',
  'Rated Excellent On Trustpilot'
];

export const TopBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMessage = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % messages.length);
  }, []);

  const prevMessage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + messages.length) % messages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextMessage, 3000);
    return () => clearInterval(intervalId);
  }, [nextMessage]);

  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white text-sm font-medium py-2 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
        <button aria-label="Previous message" className="opacity-75 hover:opacity-100" onClick={prevMessage}>
            <ChevronLeftIcon className="h-5 w-5" />
        </button>
        
        <div className="relative h-5 w-64 text-center">
             {messages.map((message, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden={currentIndex !== index}
                >
                    <p>{message}</p>
                </div>
             ))}
        </div>

        <button aria-label="Next message" className="opacity-75 hover:opacity-100" onClick={nextMessage}>
            <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
