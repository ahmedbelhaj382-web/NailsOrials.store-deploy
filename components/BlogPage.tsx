import React from 'react';

export const BlogPage: React.FC = () => {
  return (
    <main className="bg-white py-16 sm:py-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800 leading-relaxed">

        {/* Title */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-tinos text-gray-900">
            Best At-Home Nail Kits for Beginners
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Honest reviews and comparisons to help you choose the perfect DIY nail kit
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-6 text-lg">
          <p>
            Achieving salon-quality nails at home has never been easier. With modern DIY nail kits,
            beginners can now enjoy professional-looking manicures without expensive salon visits.
          </p>
          <p>
            In this review, we compare the <strong>best at-home nail kits for beginners</strong>,
            including dip powder, gel polish, and press-on nail kits, to help you choose the right option.
          </p>
        </section>

        {/* Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Makes a Nail Kit Beginner-Friendly?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Easy application with clear steps</li>
            <li>Minimal tools required</li>
            <li>Long-lasting and safe formulas</li>
            <li>Good value for beginners</li>
          </ul>
        </section>

        {/* Dip Powder */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Dip Powder Nail Kits – Best for Long-Lasting Wear
          </h2>
          <p className="text-lg mb-4">
            Dip powder nail kits are ideal for beginners who want strong, chip-free nails that last
            up to 3–4 weeks without a UV lamp.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>No UV or LED lamp needed</li>
            <li>Extremely durable finish</li>
            <li>Professional salon look</li>
          </ul>
        </section>

        {/* Gel */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Gel Nail Kits – Best for a Glossy Salon Look
          </h2>
          <p className="text-lg mb-4">
            Gel nail kits deliver a high-shine, flexible finish and are perfect for beginners who
            enjoy a classic salon-style manicure.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Glossy professional finish</li>
            <li>Wide range of colors</li>
            <li>Longer wear than regular polish</li>
          </ul>
        </section>

        {/* Press On */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Press-On Nail Kits – Best for Fast Results
          </h2>
          <p className="text-lg mb-4">
            Press-on nails are the easiest option for beginners. They offer instant results and
            can last up to 14 days with proper application.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>No experience required</li>
            <li>Fast application</li>
            <li>Affordable and reusable</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Final Thoughts
          </h2>
          <p className="text-lg">
            Choosing the right nail kit can make your at-home manicure experience easy and enjoyable.
            Whether you prefer dip powder, gel polish, or press-on nails, the key is starting with
            beginner-friendly products and following proper techniques.
          </p>
        </section>

      </article>
    </main>
  );
};
