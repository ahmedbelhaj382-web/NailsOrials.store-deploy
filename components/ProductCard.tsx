
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { StarIcon, InfoIcon } from './Icons';

interface ProductCardProps {
  product: Product;
  onQuickViewClick: (product: Product) => void;
}

const Badge: React.FC<{ text: string }> = ({ text }) => {
    let bgColor = 'bg-red-500';
    if (text === 'BEST SELLER') bgColor = 'bg-pink-500';
    if (text === 'TRENDING') bgColor = 'bg-purple-500';
    if (text === 'NEW FORMULA') return (
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-20 h-20 flex items-center justify-center text-center leading-tight p-2">
            NEW PREMIUM FORMULA!
        </div>
    );
    
    return (
        <div className={`absolute top-2 left-2 ${bgColor} text-white text-xs font-bold px-2 py-1 rounded z-10`}>
            {text}
        </div>
    );
};

const Rating: React.FC<{ rating: number; reviewCount: number }> = ({ rating, reviewCount }) => {
    return (
        <div className="flex items-center mb-1 md:mb-2">
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < rating} className={`w-3 h-3 md:w-4 md:h-4 ${i < rating ? 'text-pink-500' : 'text-gray-300'}`} />
                ))}
            </div>
            <span className="text-[10px] md:text-xs text-gray-500 ml-1 md:ml-2">{reviewCount} Reviews</span>
        </div>
    );
}

const ImageCarousel: React.FC<{ images: string[]; productName: string; isHovered: boolean; transitionSpeed?: number }> = ({ images, productName, isHovered, transitionSpeed = 700 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1 || !isHovered) {
            setCurrentIndex(0); // Reset to first image when not hovered
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, transitionSpeed);

        return () => clearInterval(interval);
    }, [images, isHovered, transitionSpeed]);

    return (
        <div className="w-full aspect-square relative overflow-hidden">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${productName} image ${index + 1}`}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
        </div>
    );
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const displaySalePrice = product.salePrice ?? (product.price > 15 ? product.price - 4 : product.price - 2);

    return (
        <div 
            className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:border-pink-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <ImageCarousel images={product.images} productName={product.name} isHovered={isHovered} transitionSpeed={product.imageTransitionSpeed} />
                {product.badge && <Badge text={product.badge} />}
                
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onQuickViewClick(product);
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gray-800/10 hover:bg-gray-800/30 backdrop-blur-[2px] rounded-full flex items-center justify-center text-white text-sm font-semibold hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-20 whitespace-nowrap drop-shadow-md"
                    aria-label={`Quick view ${product.name}`}
                >
                    Quick View
                </button>
            </div>
            <div className="p-3 md:p-4 flex flex-col flex-grow">
                <Rating rating={product.rating} reviewCount={product.reviewCount} />
                <h3 className="text-xs md:text-sm font-semibold text-gray-800 flex-grow mb-1 md:mb-2 leading-snug">
                     <a href={product.affiliateLink ?? '#'} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                        {product.name}
                    </a>
                </h3>
                <div className="flex items-baseline mt-1 mb-2">
                    <p className="text-lg font-bold text-red-600 mr-2">${displaySalePrice.toFixed(2)}</p>
                    <p className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</p>
                </div>
                 <div className="text-[10px] md:text-xs font-semibold text-pink-500 flex items-center mb-4">
                    <InfoIcon className="w-3 h-3 mr-1" />
                    <span>10% for new members</span>
                </div>
                
                <div className="mt-auto w-full">
                    <a href={product.affiliateLink ?? '#'} target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full bg-[#3e2336] text-white rounded-full py-2 text-xs md:text-sm font-bold tracking-wide hover:bg-opacity-90 transition-colors flex items-center justify-center">
                            <span>ADD TO CART</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
