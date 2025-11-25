
import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, CheckIcon, InfoIcon, AmazonLogoFullIcon, CartIcon } from './Icons';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && event.target === modalRef.current) {
        onClose();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageContainerRef.current) {
      const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setZoomPosition({ x, y });
    }
  };
  
  const displaySalePrice = product.salePrice ?? (product.price > 15 ? product.price - 4 : product.price - 2);

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] md:max-h-[90vh] flex flex-col md:flex-row relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-black z-30 bg-white rounded-full p-1.5 shadow-sm hover:shadow-md transition-all"
          aria-label="Close product quick view"
        >
          <CloseIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-white flex flex-col relative border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
            <div 
                ref={imageContainerRef}
                className="relative w-full h-64 md:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden bg-white cursor-crosshair p-0 md:p-4"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
            >
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - view ${currentImageIndex + 1}`}
                  className={`w-full h-full object-contain transition-transform duration-200 ease-out ${isZoomed ? 'scale-[2.5]' : 'scale-100'}`}
                  style={isZoomed ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : undefined}
                />
                {product.images.length > 1 && !isZoomed && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-2 shadow-sm text-gray-800 transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-2 shadow-sm text-gray-800 transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </>
                )}
            </div>
            
             {/* Thumbnails - Very Small & Compact */}
            {product.images.length > 1 && (
                <div className="py-2 px-4 bg-white border-t border-gray-100 shrink-0">
                    <div className="flex space-x-2 overflow-x-auto no-scrollbar justify-center py-1">
                    {product.images.map((img, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-8 h-8 md:w-6 md:h-6 rounded-sm overflow-hidden border-2 transition-all shrink-0 ${currentImageIndex === index ? 'border-pink-500 ring-1 ring-pink-500 opacity-100' : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100'}`}
                        aria-label={`View image ${index + 1}`}
                        >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                    </div>
                </div>
            )}
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col overflow-y-auto bg-white">
          <div className="flex items-center space-x-2 text-[10px] text-gray-500 tracking-wider mb-2 uppercase">
             <span>Home</span>
             <span>/</span>
             <span>Products</span>
             <span>/</span>
             <span>{product.categoryId === 4 ? 'Press Ons' : 'Nail Care'}</span>
          </div>

          <h2 id="product-modal-title" className="text-lg md:text-2xl lg:text-3xl font-tinos text-gray-900 mb-2 leading-tight">{product.name}</h2>
          
          <div className="flex items-baseline mb-3">
            <p className="text-xl md:text-2xl font-bold text-red-600 mr-2">${displaySalePrice.toFixed(2)}</p>
            <p className="text-sm md:text-base font-medium text-gray-400 line-through">${product.price.toFixed(2)}</p>
          </div>
          
           <div className="text-[10px] md:text-xs text-pink-700 font-bold flex items-center mb-4 bg-pink-50 w-fit px-2 py-1 rounded border border-pink-100">
              <InfoIcon className="w-3 h-3 mr-1.5" />
              <span>Member Price: ${product.memberPrice.toFixed(2)}</span>
          </div>

          <div className="prose prose-sm">
              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">
                {product.description}
              </p>
          </div>
          
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-2 pt-4 border-t border-gray-100">
            <a href={product.affiliateLink ?? '#'} target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full bg-[#3e2336] text-white rounded-full py-3 text-xs md:text-sm font-bold tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                    <span>ADD TO CART</span>
                </button>
            </a>
            <a href={product.affiliateLink ?? '#'} target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full bg-[#FF9900] hover:bg-[#ff8c00] text-black rounded-full py-3 text-xs md:text-sm font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-sm border border-transparent hover:border-yellow-600">
                    <span>Buy on</span>
                    <AmazonLogoFullIcon className="h-4 md:h-5" />
                </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
