
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

interface CategoryFilterProps {
  activeCategoryId: number | null;
  setActiveCategoryId: (id: number) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategoryId, setActiveCategoryId }) => {
  const currentActiveCategory = activeCategoryId ?? 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-tinos text-black">Shop By Category</h2>
        <p className="text-sm text-gray-600 mt-2 max-w-lg mx-auto">Nailsorials brings you the hottest nail products at the lowest prices — unlock up to 20% OFF today!</p>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 md:justify-center no-scrollbar">
        {CATEGORIES.map((category: Category) => (
          <div 
            key={category.id} 
            className="flex-shrink-0 text-center cursor-pointer group"
            onClick={() => setActiveCategoryId(category.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setActiveCategoryId(category.id)}
            aria-label={`Select category: ${category.name}`}
          >
            <div className={`w-[81px] h-[81px] rounded-full flex items-center justify-center transition-all duration-300 ${currentActiveCategory === category.id ? 'bg-[#3e2336]' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
              {category.name === 'Shop All' ? (
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-widest">All</span>
                </div>
              ) : (
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-20 h-20 rounded-full object-cover" 
                />
              )}
            </div>
            <p className={`mt-2 text-sm font-medium ${currentActiveCategory === category.id ? 'text-black' : 'text-gray-600'}`}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
