import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-tinos text-gray-900 sm:text-5xl">
            Your Privacy Matters 💖
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last Updated: {formattedDate}
          </p>
        </div>
        <div className="space-y-8 text-lg leading-relaxed">
            <p>At Nailsorials, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.</p>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Email addresses when you subscribe to our newsletter.</li>
                  <li>Information you provide when contacting us or making a purchase.</li>
                  <li>Cookies and usage data to improve your browsing experience.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
               <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>To send you newsletters, updates, and promotions.</li>
                  <li>To respond to your inquiries and provide customer support.</li>
                  <li>To improve our website, products, and services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Sharing Your Information</h2>
              <p>We do not sell or share your personal data with third parties, except as required by law or to deliver services (e.g., Amazon purchases).</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Your Choices</h2>
              <p>You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in emails. You can also contact us to delete your data from our system.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Security</h2>
              <p>We implement industry-standard security measures to protect your information from unauthorized access.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Updates to This Policy</h2>
              <p>We may update this policy occasionally. Any changes will be posted on this page with the updated date.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
              <p>If you have questions about your privacy, please reach out via our Contact Us page.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
