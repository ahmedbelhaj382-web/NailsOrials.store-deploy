

import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { CloseIcon, CheckIcon } from './Icons';

interface BuildKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KitProductCard: React.FC<{
  product: Product;
  isSelected: boolean;
  onToggle: () => void;
  isDisabled: boolean;
}> = ({ product, isSelected, onToggle, isDisabled }) => {
  return (
    <div
      className={`relative border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-pink-500 shadow-lg' : 'border-gray-200'
      } ${isDisabled && !isSelected ? 'opacity-50 cursor-not-allowed' : 'hover:border-pink-400'}`}
      onClick={() => (!isDisabled || isSelected) && onToggle()}
      aria-pressed={isSelected}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && (!isDisabled || isSelected) && onToggle()}
    >
      <img src={product.images[0]} alt={product.name} className="w-full aspect-square object-cover" />
      {isSelected && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
            <CheckIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      )}
      <div className="p-3 bg-white">
        <h4 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h4>
        <p className="text-sm text-gray-600">${(product.salePrice ?? product.price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export const BuildKitModal: React.FC<BuildKitModalProps> = ({ isOpen, onClose }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const isKitFull = selectedProducts.length >= 3;

  useEffect(() => {
    if (isOpen) {
      // Reset state when opening
      setSelectedProducts([]);
    }
  }, [isOpen]);

  // Handle clicks outside the modal content
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
        onClose();
    }
  };

  const handleToggleProduct = (product: Product) => {
    setSelectedProducts(prevSelected => {
      const isAlreadySelected = prevSelected.some(p => p.id === product.id);
      if (isAlreadySelected) {
        return prevSelected.filter(p => p.id !== product.id);
      } else {
        if (prevSelected.length < 3) {
          return [...prevSelected, product];
        }
      }
      return prevSelected; // Return current state if trying to add more than 3
    });
  };
  
  const totalPrice = selectedProducts.reduce((sum, product) => sum + (product.salePrice ?? product.price), 0);
  const isKitComplete = selectedProducts.length === 3;

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="build-kit-title"
    >
      <div
        ref={modalContentRef}
        className="bg-gray-50 rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col relative"
      >
        <div className="flex-shrink-0 p-6 border-b border-gray-200 text-center relative">
            <h2 id="build-kit-title" className="text-3xl font-tinos text-gray-900">
                Build Your Perfect Nail Kit
            </h2>
            <p className="text-gray-600 mt-2">Select 3 products to create your custom kit and enjoy a special discount!</p>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black z-20 bg-gray-100 rounded-full p-1"
                aria-label="Close build a kit modal"
            >
                <CloseIcon className="w-6 h-6" />
            </button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {PRODUCTS.map(product => {
                    const isSelected = selectedProducts.some(p => p.id === product.id);
                    return (
                        <KitProductCard
                            key={product.id}
                            product={product}
                            isSelected={isSelected}
                            onToggle={() => handleToggleProduct(product)}
                            isDisabled={isKitFull && !isSelected}
                        />
                    );
                })}
            </div>
        </div>

        <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex items-center justify-between mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-4">
                    <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: `${(selectedProducts.length / 3) * 100}%` }}></div>
                </div>
                <div className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                    {selectedProducts.length} of 3 Selected
                </div>
            </div>
             <div className="flex flex-col sm:flex-row items-center justify-between">
                <div>
                    <span className="text-gray-600">Total Price:</span>
                    <span className="text-2xl font-bold text-gray-900 ml-2">${totalPrice.toFixed(2)}</span>
                </div>
                <button
                    onClick={onClose} // For now, just closes. Could add to cart logic later.
                    disabled={!isKitComplete}
                    className="w-full sm:w-auto mt-4 sm:mt-0 bg-[#3e2336] text-white rounded-full py-3 px-8 text-sm font-bold transition-colors hover:bg-opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Add Kit To Cart
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};