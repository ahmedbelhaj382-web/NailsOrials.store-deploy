import React, { useState, useRef, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { AboutUsPage } from './components/AboutUsPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { StoreLocatorPage } from './components/StoreLocatorPage';
import { RefundPolicyPage } from './components/RefundPolicyPage';
import { BlogPage } from './components/BlogPage';
import { ContactUsPage } from './components/ContactUsPage';
import { FaqPage } from './components/FaqPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { BuildKitPage } from './components/BuildKitPage';
import { ProductModal } from './components/ProductModal';
import { Product } from './types';
import { StarIcon, DownloadIcon, CheckIcon, ArrowRightIcon } from './components/Icons';

// --- SEO CONFIGURATION ---
const BASE_URL = "https://nailsorials.store/";

const PAGE_META: Record<string, { title: string; description: string; canonical: string }> = {
  home: {
    title: "Nailsorials | Salon-Quality Dip Powder, Gel & Press-On Kits",
    description: "Achieve flawless salon-quality nails at home with Nailsorials. Shop premium dip powder, gel polish, press-ons & custom nail kits. Expert tools & tutorials.",
    canonical: ""
  },
  products: {
    title: "Shop Nail Products | Nailsorials",
    description: "Browse our collection of salon-quality nail products, from press-ons and gels to essential tools and removers.",
    canonical: "products"
  },
  'build-kit': {
    title: "Build Your Custom Nail Kit | Nailsorials",
    description: "Create your perfect nail kit. Select 3 products and save up to 30%. Choose from press-ons, gels, and tools.",
    canonical: "build-kit"
  },
  about: {
    title: "About Us | Nailsorials Story",
    description: "We are passionate about helping nail lovers discover the best products. Read our story and mission.",
    canonical: "about"
  },
  terms: {
    title: "Terms of Service | Nailsorials",
    description: "Read our terms of service regarding website use, affiliate disclosures, and user responsibilities.",
    canonical: "terms"
  },
  'store-locator': {
    title: "Store Locator | Find Nailsorials Products",
    description: "Find Nailsorials recommended products at retailers near you like Sally Beauty, Target, and Walmart.",
    canonical: "store-locator"
  },
  refund: {
    title: "Refund Policy | Nailsorials",
    description: "Understand our refund policy for Amazon affiliate purchases and our 30-day purchase guarantee.",
    canonical: "refund"
  },
  academy: {
    title: "NailsOrials Guide | Free Nail Guides & Tutorials",
    description: "Download free professional nail guides. Master tips, forms, and sculpting techniques with our expert manuals.",
    canonical: "academy"
  },
  blog: {
    title: "Product Reviews & Blog | Nailsorials",
    description: "Honest reviews and comparisons of the latest nail products, trends, and tutorials.",
    canonical: "blog"
  },
  contact: {
    title: "Contact Us | Nailsorials Support",
    description: "Get in touch with the Nailsorials team for questions, suggestions, or support. We love connecting with nail lovers.",
    canonical: "contact"
  },
  faq: {
    title: "FAQ | Nailsorials Help Center",
    description: "Frequently asked questions about orders, shipping, returns, and product recommendations.",
    canonical: "faq"
  },
  privacy: {
    title: "Privacy Policy | Nailsorials",
    description: "Your privacy matters. Learn how we collect, use, and protect your personal data.",
    canonical: "privacy"
  }
};

// --- PAGES ---

const NailsOrialsGuidePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://ideogram.ai/assets/image/lossless/response/3bffyyxsSf2GPjaOTv-yXw",
    "https://ideogram.ai/assets/image/lossless/response/ZfcuXKRVTJ2Yj8DwS4sIVQ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const downloadLink = "https://drive.google.com/file/d/1vjIr1fnuAhKveu7B5KxkNx9DbK_hRZbT/view?usp=sharing";

  return (
    <div className="bg-white py-12 sm:py-16 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-tinos text-gray-900 sm:text-5xl">NailsOrials Guide</h1>
           <p className="mt-4 text-lg text-gray-600">Master the art of nails with our professional guides.</p>
        </div>

        {/* Ebook Card */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row mb-16">
            <div className="md:w-1/2 relative h-[500px] md:h-auto bg-white">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Ebook preview ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} filled={true} className="w-5 h-5" />)}
                    <span className="text-gray-500 text-sm ml-2 font-medium">(1,240 Reviews)</span>
                </div>
                <h2 className="text-3xl font-tinos text-gray-900 mb-4 leading-tight">The Complete Guide to Nail Tips & Forms</h2>
                <p className="text-gray-600 mb-6 text-lg">Unlock the secrets to perfectly sculpted nails. A professional step-by-step manual for avoiding lifting, air bubbles, and structural failures.</p>
                
                <div className="flex items-center space-x-6 mb-8">
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-pink-600">5k+</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Downloads</span>
                    </div>
                     <div className="w-px h-10 bg-gray-300"></div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-pink-600">Free</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Price</span>
                    </div>
                </div>

                <a 
                    href={downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 bg-[#3e2336] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-transform hover:scale-105 shadow-xl"
                >
                    <DownloadIcon className="w-6 h-6" />
                    <span>Download Free Guide</span>
                </a>
            </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-pink mx-auto text-gray-700">
            <h3 className="text-3xl font-tinos text-center text-gray-900 mb-8">Unlock Flawless Nails: Your FREE Step-by-Step Guide to Mastering Tips & Forms</h3>
            
            <p className="lead">
                Tired of lifting, air bubbles, and unhappy clients? The foundation of every stunning, long-lasting nail enhancement lies in the perfect application of nail tips and forms. Most common salon problems can be traced back to errors in this crucial first step. Now, a comprehensive, professional-grade guide is available to solve these issues forever—and it’s completely FREE.
            </p>

            <p>
                Introducing <strong>"Nail Tips and Forms: The Step-by-Step Guide,"</strong> the ultimate ebook designed to transform your technique, boost your confidence, and elevate your nail business.
            </p>

            <h4 className="text-2xl font-serif text-gray-900 mt-8 mb-4">What Makes This Ebook a Game-Changer?</h4>
            <p>This isn't just a theory book; it's a practical, visual manual built for success. Inside, you'll discover:</p>
            
            <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                     <CheckIcon className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                     <span><strong>The Secret to Perfect Selection:</strong> Learn how to choose the right tip for every client—from full wells for bitten nails to well-less for a seamless look. Never struggle with improper curvature or fit again.</span>
                </li>
                <li className="flex items-start">
                     <CheckIcon className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                     <span><strong>Foolproof Adhesion Techniques:</strong> Master nail plate preparation, from sanitization and cuticle work to precise free edge beveling. Our guide ensures your enhancements stay put for weeks, eliminating costly redos.</span>
                </li>
                <li className="flex items-start">
                     <CheckIcon className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                     <span><strong>Seamless Blending Masterclass:</strong> Achieve a flawless, invisible transition between the natural nail and the tip. Detailed instructions teach you how to pre-blend and finish like a top-tier artist.</span>
                </li>
                <li className="flex items-start">
                     <CheckIcon className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                     <span><strong>Nail Form Proficiency:</strong> Go beyond tips and master the art of forms. Learn how to customize and place forms for a comfortable, natural-feeling enhancement that doesn't pressure the nail plate.</span>
                </li>
                <li className="flex items-start">
                     <CheckIcon className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                     <span><strong>Advanced Modifications:</strong> Tackle any challenge, from "hammer thumbs" to overgrown hyponychiums, with expert-level modification techniques clearly explained.</span>
                </li>
            </ul>

            <p className="mt-8">
                Packed with clear photographs, self-tests, and easy-to-follow checklists, this guide turns complex techniques into simple, actionable steps. Stop wasting time on frustrating corrections. Invest in your skills and start offering the durable, beautiful nails your clients deserve.
            </p>

             <div className="mt-12 text-center">
                <p className="text-xl font-medium text-gray-900 mb-6">Download Your FREE Copy Now and build the foundation for a more successful, profitable nail career today!</p>
                <a 
                    href={downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-200"
                >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download Free Guide</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const categoryFilterRef = useRef<HTMLDivElement>(null);

  // --- PHASE 4: SMART NAVIGATION SYSTEM ---
  const performNavigation = (target: string, callback?: () => void) => {
    if (page === target && !callback) return;

    setIsTransitioning(true);
    
    // Simulate navigation delay for smooth transition
    setTimeout(() => {
      setPage(target);
      if (callback) callback();
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);

      // Update URL safely (Phase 5 Safety)
      const targetHash = `#${target}`;
      try {
        window.history.pushState({ page: target }, '', targetHash);
      } catch (e) {
        console.warn("Navigation state update skipped due to environment restrictions:", e);
      }
    }, 300); // 300ms match with CSS transition
  };

  const navigate = (target: string) => {
    performNavigation(target, () => setActiveCategoryId(null));
  };
  
  const handleNavigateToCategory = (categoryId: number) => {
    performNavigation('home', () => setActiveCategoryId(categoryId));
  };

  const handleBuildKitClick = () => {
    performNavigation('build-kit');
  };

  // --- SCROLL TO CATEGORY LOGIC ---
  useEffect(() => {
    if (page === 'home' && activeCategoryId !== null && !isTransitioning) {
      const timer = setTimeout(() => {
        categoryFilterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [page, activeCategoryId, isTransitioning]);

  // --- MODAL LOCK ---
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProduct]);

  // --- INITIAL LOAD & POPSTATE ---
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      const target = hash && PAGE_META[hash] ? hash : 'home';
      setPage(target);
      window.scrollTo(0, 0);
    };

    const initialHash = window.location.hash.slice(1);
    if (initialHash && PAGE_META[initialHash]) {
      setPage(initialHash);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- PHASE 6: SEO OPTIMIZATION MANAGER ---
  useEffect(() => {
    const meta = PAGE_META[page] || PAGE_META['home'];
    
    // 1. Update Title
    document.title = meta.title;
    
    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', meta.description);
    
    // 3. Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${BASE_URL}${meta.canonical}`);
    
    // 4. Update Open Graph
    const updateMeta = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
    };

    updateMeta('og:title', meta.title);
    updateMeta('og:description', meta.description);
    updateMeta('og:url', `${BASE_URL}${meta.canonical ? '#' + meta.canonical : ''}`);

  }, [page]);


  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopBanner />
      <Header onNavigate={navigate} onNavigateToCategory={handleNavigateToCategory} onBuildKitClick={handleBuildKitClick} />
      
      {/* PHASE 4: SMOOTH TRANSITION CONTAINER */}
      <main className={`flex-grow transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {(page === 'home' || page === 'products') && (
            <>
                <Hero />
                <div ref={categoryFilterRef}>
                  <CategoryFilter activeCategoryId={activeCategoryId} setActiveCategoryId={setActiveCategoryId} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <ProductGrid activeCategoryId={activeCategoryId} onQuickViewClick={setSelectedProduct} />
                </div>
                
                {/* NEW Educational Section */}
                <div className="bg-pink-50 py-16 my-8">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-tinos text-gray-900 mb-4">Learn Nails with Nailsorials</h2>
                    <h3 className="text-xl text-gray-600 mb-8 font-medium">Master Dip, Gel & Nail Art Techniques</h3>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-8 leading-relaxed">
                      Whether you're a beginner or a pro, explore our free guides and tutorials to become your own nail tech. Unlock the secrets to perfect applications and stunning designs.
                    </p>
                    <button 
                      onClick={() => navigate('academy')}
                      className="inline-flex items-center bg-[#3e2336] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-transform hover:scale-105"
                    >
                      <span>Explore Our Guide</span>
                      <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>

                <Newsletter />
            </>
        )}
        {page === 'build-kit' && <BuildKitPage />}
        {page === 'about' && <AboutUsPage />}
        {page === 'terms' && <TermsOfServicePage />}
        {page === 'store-locator' && <StoreLocatorPage />}
        {page === 'refund' && <RefundPolicyPage />}
        {page === 'academy' && <NailsOrialsGuidePage />}
        {page === 'blog' && <BlogPage />}
        {page === 'contact' && <ContactUsPage />}
        {page === 'faq' && <FaqPage />}
        {page === 'privacy' && <PrivacyPolicyPage />}
      </main>

      <Footer onNavigate={navigate} />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default App;