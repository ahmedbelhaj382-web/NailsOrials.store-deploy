

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  activeCategoryId: number | null;
  onQuickViewClick: (product: Product) => void;
}

/**
 * Creates a deterministic, daily-rotating list of curated products.
 * @param allProducts The complete list of products.
 * @param numberOfProducts The number of products to include in the curated list.
 * @returns A shuffled and sliced array of products.
 */
const getDailyCuratedProducts = (allProducts: Product[], numberOfProducts: number): Product[] => {
    // Get the number of days since Unix epoch. This value changes once per day.
    const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    
    // Create a new array to avoid mutating the original
    const shuffled = [...allProducts];

    // Simple seeded pseudo-random number generator
    let seed = daySeed;
    const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    // Fisher-Yates shuffle using the seeded PRNG
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, numberOfProducts);
};


export const ProductGrid: React.FC<ProductGridProps> = ({ activeCategoryId, onQuickViewClick }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (activeCategoryId === null) {
      // On initial load, show the daily curated list (same as 'Shop All')
      setFilteredProducts(getDailyCuratedProducts(PRODUCTS, 12));
    } else if (activeCategoryId === 1) {
      // For 'Shop All', show a daily rotating selection of 12 products.
      setFilteredProducts(getDailyCuratedProducts(PRODUCTS, 12));
    } else {
      // When a specific category is selected, filter by that category
      setFilteredProducts(PRODUCTS.filter(p => p.categoryId === activeCategoryId));
    }
  }, [activeCategoryId]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} onQuickViewClick={onQuickViewClick} />
      ))}
    </div>
  );
};