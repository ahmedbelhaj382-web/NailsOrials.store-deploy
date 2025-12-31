import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
  TopBanner,
  Header,
  Hero,
  CategoryFilter,
  ProductGrid,
  Newsletter,
  Footer,
  AboutUsPage,
  TermsOfServicePage,
  StoreLocatorPage,
  RefundPolicyPage,
  BlogPage,
  ContactUsPage,
  FaqPage,
  PrivacyPolicyPage,
  BuildKitPage,
  ProductModal,
} from "./components";

import { Product } from "./types";

const BASE_URL = "https://nailsorials.store/";

const SEO = {
  home: {
    title: "Nailsorials | Salon-Quality Nail Kits & Nail Art Supplies",
    description:
      "Shop salon-quality nail kits, dip powder, gel polish, press-on nails and professional nail tools at Nailsorials.",
    path: "",
  },
  "build-kit": {
    title: "Build Your Custom Nail Kit | Nailsorials",
    description:
      "Create your perfect nail kit. Choose press-ons, gels, and tools and save on your custom bundle.",
    path: "build-kit",
  },
  about: {
    title: "About Nailsorials | Our Story & Mission",
    description:
      "Learn about Nailsorials and our mission to help you achieve salon-quality nails at home.",
    path: "about",
  },
  blog: {
    title: "Nail Tutorials & Product Reviews | Nailsorials",
    description:
      "Read nail tutorials, product reviews and tips to master gel, dip and nail art techniques.",
    path: "blog",
  },
  contact: {
    title: "Contact Nailsorials | Customer Support",
    description:
      "Contact the Nailsorials team for support, questions or collaborations.",
    path: "contact",
  },
};

const App: React.FC = () => {
  const [page, setPage] = useState<keyof typeof SEO>("home");
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  const meta = SEO[page] || SEO.home;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && SEO[hash as keyof typeof SEO]) {
      setPage(hash as keyof typeof SEO);
    }
  }, []);

  const navigate = (target: keyof typeof SEO) => {
    setPage(target);
    window.scrollTo(0, 0);
    window.history.pushState({}, "", `#${target}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SEO */}
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${BASE_URL}${meta.path}`} />
      </Helmet>

      <TopBanner />
      <Header onNavigate={navigate} />

      <main className="flex-grow">
        {(page === "home") && (
          <>
            <Hero />
            <div ref={categoryRef}>
              <CategoryFilter
                activeCategoryId={activeCategoryId}
                setActiveCategoryId={setActiveCategoryId}
              />
            </div>
            <ProductGrid
              activeCategoryId={activeCategoryId}
              onQuickViewClick={setSelectedProduct}
            />
            <Newsletter />
          </>
        )}

        {page === "build-kit" && <BuildKitPage />}
        {page === "about" && <AboutUsPage />}
        {page === "blog" && <BlogPage />}
        {page === "contact" && <ContactUsPage />}
      </main>

      <Footer onNavigate={navigate} />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;
