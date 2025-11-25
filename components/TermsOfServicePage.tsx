
import React from 'react';

export const TermsOfServicePage: React.FC = () => {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last Updated: {formattedDate}
          </p>
        </div>
        <div className="space-y-8 text-lg leading-relaxed">
            <p>Welcome to Nailsorials. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our site.</p>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing Nailsorials, you agree to follow these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use the website.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Affiliate Disclosure</h2>
              <p>Nailsorials participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for websites to earn fees by advertising and linking to Amazon products.</p>
              <p>When you click on our affiliate links and make a purchase, we may earn a commission at no additional cost to you.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Website Content</h2>
              <p>All content on Nailsorials, including product reviews, recommendations, articles, and images, is for informational purposes only. We aim to provide accurate, up-to-date information, but we cannot guarantee the completeness or reliability of any content.</p>
              <p className="mt-4">Nailsorials is not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>Product performance</li>
                  <li>Shipping or delivery issues</li>
                  <li>Pricing changes</li>
                  <li>Availability of items on Amazon</li>
              </ul>
              <p className="mt-4">Always verify product details on Amazon before purchasing.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. User Responsibilities</h2>
              <p>By using this website, you agree not to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>Misuse the site or attempt unauthorized access</li>
                  <li>Copy, reproduce, or distribute site content without permission</li>
                  <li>Use the website for fraudulent or harmful activities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Third-Party Links</h2>
              <p>Our website contains links to third-party websites (including Amazon). We are not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>The content on third-party sites</li>
                  <li>Their privacy practices</li>
                  <li>Any products or services purchased through them</li>
              </ul>
              <p className="mt-4">Use these links at your own discretion.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Intellectual Property</h2>
              <p>All text, design, branding, and content on Nailsorials are protected by copyright and may not be reused or reproduced without written permission.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Limitation of Liability</h2>
              <p>Nailsorials is not liable for any direct, indirect, or incidental damages resulting from:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>Website use</li>
                  <li>Product purchases from Amazon</li>
                  <li>Reliance on any content we publish</li>
              </ul>
              <p className="mt-4">You use the site at your own risk.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Changes to Terms</h2>
              <p>We may update these Terms of Service at any time. Continued use of the website after changes means you accept the updated terms.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
              <p>If you have questions about these terms, you can contact us at: 📩 Nialsorials@contact.com</p>
            </div>
        </div>
      </div>
    </div>
  );
};
