
import React from 'react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-pink-600 tracking-wide uppercase">Our Story</p>
          <h1 className="mt-2 text-4xl font-tinos text-gray-900 sm:text-5xl">
            Welcome to Nailsorials
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Your trusted destination for all things nails, beauty, and self-care.
          </p>
        </div>
        <div className="mt-12 text-lg text-gray-600 space-y-8 text-left leading-relaxed">
          <p>
            We’re passionate about helping nail lovers, beginners, and beauty enthusiasts discover the best products, tips, and trends in the nail world.
          </p>
          <p>
            At Nailsorials, we review and recommend high-quality Amazon nail products, from gel polish kits and nail tools to press-on nails and professional accessories. Our goal is to make your beauty routine easier, smarter, and more stylish with honest reviews and expert-inspired guides.
          </p>
          <p>
            Whether you're creating salon-worthy nails at home or exploring new nail art ideas, Nailsorials is here to inspire, support, and guide you every step of the way.
          </p>
          <p className="text-center font-semibold text-gray-700 pt-4">
            Beautiful nails start here — let’s create something stunning together. 💅✨
          </p>
        </div>
      </div>
    </div>
  );
};
