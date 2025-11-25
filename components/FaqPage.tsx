
import React from 'react';

const faqs = [
  {
    question: '1. How do I place an order?',
    answer: 'Simply browse our products, click Add to Cart, and follow the checkout steps. You’ll receive a confirmation email once your order is complete.',
  },
  {
    question: '2. Can I track my order?',
    answer: 'Yes! After purchase, Amazon will provide a tracking number so you can monitor your package every step of the way.',
  },
  {
    question: '3. What is the return policy?',
    answer: 'All products purchased via Amazon come with a 30-day return & refund guarantee. See the product page for full details.',
  },
  {
    question: '4. Are your products suitable for beginners?',
    answer: 'Absolutely! We offer step-by-step tutorials and product guides for both beginners and professionals.',
  },
  {
    question: '5. How can I contact you?',
    answer: 'You can reach us anytime via our Contact Us page, email, or social media. We love hearing from our nail community!',
  },
  {
    question: '6. When will NailsOrials Guide launch?',
    answer: 'The Guide is coming soon! We’re finalizing tutorials and courses to give you the best learning experience. Stay tuned for updates!',
  },
];

export const FaqPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-tinos text-gray-900 sm:text-5xl">
            FAQs – Frequently Asked Questions 💅
          </h1>
        </div>
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{faq.question}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
