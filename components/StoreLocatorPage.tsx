import React from 'react';

const retailers = [
  {
    name: 'Sally Beauty',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sally_Beauty_logo.svg/1024px-Sally_Beauty_logo.svg.png',
  },
  {
    name: 'Target',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1024px-Target_Corporation_logo_%28vector%29.svg.png',
  },
  {
    name: 'Walmart',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/1024px-Walmart_Spark.svg.png',
  },
  {
    name: 'CVS Pharmacy',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/CVS_Health_Logo.svg/1280px-CVS_Health_Logo.svg.png',
  },
  {
    name: 'Rite Aid',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rite_Aid_logo.svg/2560px-Rite_Aid_logo.svg.png',
  },
];

export const StoreLocatorPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-2 text-4xl font-tinos text-gray-900 sm:text-5xl">
            Find Us In Stores
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Want to shop Nailsorials IRL? We've partnered with some of your favorite retailers to bring our easy-to-use, salon-quality nail products to a store near you. Find us in the beauty aisle at the following locations:
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {retailers.map((retailer) => (
              <div key={retailer.name} className="flex justify-center">
                <img
                  src={retailer.logoUrl}
                  alt={retailer.name}
                  className="max-h-16 md:max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};