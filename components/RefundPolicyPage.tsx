import React from 'react';

export const RefundPolicyPage: React.FC = () => {
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
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last Updated: {formattedDate}
          </p>
        </div>
        <div className="space-y-8 text-lg leading-relaxed">
            <p>At Nailsorials, we do not sell products directly. All items featured on our website are sold through Amazon or other third-party retailers. Because of this, we do not handle payments, shipping, returns, or refunds.</p>
            <p>Please read the policy below to understand how refunds work for purchases made through our affiliate links.</p>

            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 my-8">
              <h2 className="text-2xl font-semibold text-pink-800 mb-3">30-Day Purchase Guarantee</h2>
              <div className="space-y-4 text-pink-700">
                <p>Shop with confidence! All products purchased through our Amazon links come with Amazon’s 30-day return and refund policy.</p>
                <p>If your item arrives damaged, defective, or not as described, you can request a full refund or replacement within 30 days of delivery.</p>
                <p>Returns are simple and hassle-free via Amazon’s easy return process.</p>
                <p className="font-semibold">Your satisfaction is our priority, so you can shop knowing you’re fully protected.</p>
                <p className="text-sm italic">Note: Terms may vary slightly depending on the seller and product category. Always check the product page for full details.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. No Direct Refunds from Nailsorials</h2>
              <p>Nailsorials does not process or manage refunds, exchanges, or cancellations. All transactions are completed on Amazon or other external platforms, and their refund policies apply.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Amazon’s Refund Policy</h2>
              <p>If you purchased a product through one of our Amazon affiliate links, your refund or return will be handled according to Amazon’s official return & refund policy.</p>
              <p className="mt-4">Amazon typically allows returns for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>Damaged or defective items</li>
                  <li>Items that don’t match the product description</li>
                  <li>Unwanted items (within the allowed return window)</li>
              </ul>
              <p className="mt-4">For detailed information, please visit the Amazon Returns Center on the Amazon website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. How to Request a Refund</h2>
              <p>To request a refund for a product bought via our links:</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-2">
                  <li>Log in to your Amazon account.</li>
                  <li>Go to <strong>Your Orders</strong>.</li>
                  <li>Select the item you want to return.</li>
                  <li>Choose the return or replacement option provided by Amazon.</li>
              </ol>
              <p className="mt-4">Amazon will provide:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>Return instructions</li>
                  <li>Return shipping labels (if applicable)</li>
                  <li>Refund timeline</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Issues With a Product</h2>
              <p>If you experience any issues with a product, please contact Amazon Customer Service directly. They can assist with:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li>Refund requests</li>
                  <li>Replacement products</li>
                  <li>Missing or damaged items</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Contact Us</h2>
              <p>If you have questions about a product review or need help navigating Amazon’s return process, you can contact us at: 📩 Nailsorials@contact.com</p>
              <p className="mt-4">Please note: we cannot approve, deny, or process refunds ourselves.</p>
            </div>
        </div>
      </div>
    </div>
  );
};