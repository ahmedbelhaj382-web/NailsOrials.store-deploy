
import React, { useState, useEffect, useRef } from 'react';
import { 
    MenuIcon, SearchIcon, UserIcon, BlogIcon, BookIcon, ChevronDownIcon, CloseIcon, StarIcon, HelpIcon, GlobeIcon,
    InstagramIcon, TiktokIcon, PinterestIcon, YoutubeIcon, TwitterXIcon, ThreadsIcon
} from './Icons';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Category, Product } from '../types';

// --- Start of SideMenu Component ---
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  onNavigateToCategory: (categoryId: number) => void;
  onBuildKitClick: () => void;
}

const LANGUAGES = [
    { name: 'Afrikaans', code: 'af' },
    { name: 'العربية', code: 'ar' },
    { name: 'Azərbaycanca', code: 'az' },
    { name: 'Беларуская', code: 'be' },
    { name: 'Български', code: 'bg' },
    { name: 'বাংলা', code: 'bn' },
    { name: 'Bosanski', code: 'bs' },
    { name: 'Català', code: 'ca' },
    { name: 'Čeština', code: 'cs' },
    { name: 'Cymraeg', code: 'cy' },
    { name: 'Dansk', code: 'da' },
    { name: 'Deutsch', code: 'de' },
    { name: 'Ελληνικά', code: 'el' },
    { name: 'English', code: 'en' },
    { name: 'Español', code: 'es' },
    { name: 'Eesti', code: 'et' },
    { name: 'Euskara', code: 'eu' },
    { name: 'فارسی', code: 'fa' },
    { name: 'Suomi', code: 'fi' },
    { name: 'Français', code: 'fr' },
    { name: 'Gaeilge', code: 'ga' },
    { name: 'Galego', code: 'gl' },
    { name: 'עברית', code: 'he' },
    { name: 'हिन्दी', code: 'hi' },
    { name: 'Hrvatski', code: 'hr' },
    { name: 'Magyar', code: 'hu' },
    { name: 'Հայերեն', code: 'hy' },
    { name: 'Bahasa Indonesia', code: 'id' },
    { name: 'Íslenska', code: 'is' },
    { name: 'Italiano', code: 'it' },
    { name: '日本語', code: 'ja' },
    { name: 'ქართული', code: 'ka' },
    { name: 'Қазақша', code: 'kk' },
    { name: 'ភាសាខ្មែរ', code: 'km' },
    { name: '한국어', code: 'ko' },
    { name: 'Кыргызча', code: 'ky' },
    { name: 'Lietuvių', code: 'lt' },
    { name: 'Latviešu', code: 'lv' },
    { name: 'Македонски', code: 'mk' },
    { name: 'Монгол', code: 'mn' },
    { name: 'Bahasa Melayu', code: 'ms' },
    { name: 'မြန်မာဘာသာ', code: 'my' },
    { name: 'Norsk', code: 'no' },
    { name: 'Nederlands', code: 'nl' },
    { name: 'Polski', code: 'pl' },
    { name: 'Português', code: 'pt' },
    { name: 'Română', code: 'ro' },
    { name: 'Русский', code: 'ru' },
    { name: 'Slovenčina', code: 'sk' },
    { name: 'Slovenščina', code: 'sl' },
    { name: 'Shqip', code: 'sq' },
    { name: 'Српски', code: 'sr' },
    { name: 'Svenska', code: 'sv' },
    { name: 'Kiswahili', code: 'sw' },
    { name: 'ไทย', code: 'th' },
    { name: 'Türkçe', code: 'tr' },
    { name: 'Українська', code: 'uk' },
    { name: 'Oʻzbekcha', code: 'uz' },
    { name: 'Tiếng Việt', code: 'vi' },
    { name: '中文 (简体)', code: 'zh-CN' },
    { name: '中文 (繁體)', code: 'zh-TW' },
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, onNavigate, onNavigateToCategory, onBuildKitClick }) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isLearnOpen, setIsLearnOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    
    const categoryLinks = CATEGORIES.filter(c => c.id !== 1);
    
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
                aria-hidden={isOpen ? 'false' : 'true'}
            ></div>

            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="sidemenu-title"
            >
                <div className="flex flex-col h-full bg-gradient-to-b from-[#fdf6fd] to-[#f6f2fc]">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                        <h2 id="sidemenu-title" className="text-sm font-semibold tracking-widest text-gray-600">SHOP BY</h2>
                        <button onClick={onClose} className="p-2 -mr-2 text-gray-600 hover:text-black" aria-label="Close menu">
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto">
                        <div className="p-4">
                            <button
                                onClick={() => {
                                    onBuildKitClick();
                                    onClose();
                                }}
                                className="w-full bg-[#3e2336] text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition">
                                BUILD A NAIL KIT
                            </button>
                        </div>
                        
                        <div className="py-2 px-4">
                            <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="w-full flex justify-between items-center py-2 text-left font-semibold text-gray-800">
                                <span>Category</span>
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isCategoryOpen && (
                                <ul className="pl-2 space-y-2 mt-2">
                                    {categoryLinks.map(link => (
                                        <li key={link.id}>
                                            <button onClick={() => { onNavigateToCategory(link.id); onClose(); }} className="flex items-center py-1 text-gray-700 hover:text-black text-sm text-left w-full">
                                              {link.name}
                                              {link.name === "Press Ons" && <span className="ml-2 text-xs text-white bg-pink-500 font-bold px-1.5 rounded-sm">NEW!</span>}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="px-4 py-2">
                            <button onClick={() => { onNavigateToCategory(1); onClose(); }} className="w-full border border-gray-400 text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition">
                                SHOP ALL
                            </button>
                        </div>

                        <div className="border-t border-gray-200 mx-4 my-4"></div>

                        <div className="px-4">
                             <button onClick={() => setIsLearnOpen(!isLearnOpen)} className="w-full flex justify-between items-center py-2 text-left font-semibold text-gray-800">
                                <span>Learn With Nailsorials</span>
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`} />
                            </button>
                             {isLearnOpen && (
                                <ul className="pl-2 space-y-2 mt-2">
                                     <li>
                                        <button 
                                            onClick={() => { onNavigate('academy'); onClose(); }} 
                                            className="block py-1 text-gray-700 hover:text-black text-sm text-left w-full"
                                        >
                                            NailsOrials Guide
                                        </button>
                                    </li>
                                </ul>
                            )}
                            <a href="#" className="block py-2 font-semibold text-gray-800">Community</a>
                            <a href="#" className="block py-2 font-semibold text-gray-800">Reviews</a>
                            <button 
                                onClick={() => { onNavigate('store-locator'); onClose(); }} 
                                className="block py-2 font-semibold text-gray-800 text-left w-full"
                            >
                                Find Us in Stores
                            </button>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="p-4 bg-[#fdeff7]">
                             <button onClick={() => { onNavigate('blog'); onClose(); }} className="w-full text-left flex items-center space-x-3 py-2 text-gray-800 hover:text-black">
                                <StarIcon className="w-6 h-6 text-black" filled={true}/>
                                <span className="font-semibold text-sm">PRODUCT REVIEW</span>
                             </button>
                              <a href="#" className="flex items-center space-x-3 py-2 text-gray-800 hover:text-black">
                                <UserIcon className="w-6 h-6 text-black" />
                                <span className="font-semibold text-sm">LOG IN</span>
                             </a>
                             <button onClick={() => { onNavigate('contact'); onClose(); }} className="w-full text-left flex items-center space-x-3 py-2 text-gray-800 hover:text-black">
                                <HelpIcon className="w-6 h-6 text-black" />
                                <span className="font-semibold text-sm">CONTACT US</span>
                             </button>
                        </div>
                        <div className="px-4 py-2 border-t border-gray-200 bg-white">
                             <button className="w-full flex justify-between items-center py-2 text-left text-sm text-gray-600">
                                <span>USD $ | United States</span>
                                <ChevronDownIcon className="w-4 h-4" />
                             </button>
                             <div className="relative">
                                <button onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="w-full flex justify-between items-center py-2 text-left text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <GlobeIcon className="w-5 h-5 mr-2" />
                                        <span>LANGUAGE</span>
                                        <span className='ml-2 text-gray-800 font-medium'>{selectedLanguage}</span>
                                    </div>
                                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isLanguageOpen && (
                                    <div className="absolute bottom-full mb-1 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-20">
                                        <ul>
                                            {LANGUAGES.map(lang => (
                                                <li key={lang.code}>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedLanguage(lang.name);
                                                            setIsLanguageOpen(false);
                                                        }}
                                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {lang.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                             </div>
                        </div>
                         <div className="flex justify-center space-x-4 p-4 border-t border-gray-200 bg-white">
                            <a href="https://www.instagram.com/nailsorials/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-black"><InstagramIcon className="w-5 h-5" /></a>
                            <a href="https://www.threads.com/@nailsorials" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-gray-500 hover:text-black"><ThreadsIcon className="w-5 h-5" /></a>
                            <a href="https://www.tiktok.com/@nailsorials?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-black"><TiktokIcon className="w-5 h-5" /></a>
                            <a href="https://www.pinterest.com/nailstutorials4u/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-gray-500 hover:text-black"><PinterestIcon className="w-5 h-5" /></a>
                            <a href="https://x.com/nailsorials" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-gray-500 hover:text-black"><TwitterXIcon className="w-5 h-5" /></a>
                            <a href="https://www.youtube.com/@nailstutorials4u" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-black"><YoutubeIcon className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
// --- End of SideMenu Component ---

// --- Start of SearchWidget Component ---
const SearchWidget: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filteredProducts = PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredProducts);
    }, [query]);
    
    return (
        <div 
            ref={searchRef}
            className="absolute top-full left-0 w-full bg-white shadow-lg z-30 border-t border-gray-200"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="relative w-full mb-4">
                    <input
                        type="search"
                        placeholder="Search for products..."
                        className="w-full h-12 text-base text-pink-700 placeholder:text-gray-500 border border-gray-300 rounded-full pl-5 pr-16 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
                        <button className="p-2 text-gray-600 hover:text-black" aria-label="Submit search">
                            <SearchIcon className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={onClose}
                            className="p-2 text-gray-600 hover:text-black" 
                            aria-label="Close search"
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {query.trim() !== '' && (
                    <div className="max-h-80 overflow-y-auto pr-2">
                        {results.length > 0 ? (
                             <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-500 mb-2">PRODUCTS</h3>
                                {results.map(product => (
                                    <a href="#" key={product.id} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                        <img src={product.images[0]} alt={product.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                                        <div className="flex-grow">
                                            <h4 className="font-semibold text-sm text-gray-800">{product.name}</h4>
                                            <p className="text-sm text-gray-600">${product.salePrice ? product.salePrice.toFixed(2) : product.price.toFixed(2)} USD</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <p>No results found for "{query}".</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
// --- End of SearchWidget Component ---

interface HeaderProps {
    onNavigate: (page: string) => void;
    onNavigateToCategory: (categoryId: number) => void;
    onBuildKitClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onNavigateToCategory, onBuildKitClick }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Define which categories appear in the main header nav
  // Order: Press Ons, Dip Powder, Gel Polish, Tools, Nail Care, Removal, Nail Art, Shop All
  const headerNavIds = [4, 2, 3, 7, 8, 9, 10, 1];
  const navLinks = headerNavIds.map(id => CATEGORIES.find(c => c.id === id)).filter((c): c is Category => !!c);

  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSideMenuOpen]);
  
  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-center h-16 md:h-20">
            
            <div className="absolute left-4 sm:left-6 lg:left-8 flex items-center">
                <button 
                  className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
                  onClick={() => setIsSideMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <MenuIcon className="h-6 w-6"/>
                </button>
                <button
                  onClick={onBuildKitClick}
                  className="ml-4 hidden md:block bg-zinc-800 text-white border border-zinc-800 rounded-full px-4 py-2 text-sm font-semibold tracking-wider hover:bg-white hover:text-black hover:border-black transition-colors"
                  style={{ WebkitTextStroke: '0.4px black' } as React.CSSProperties}
                >
                  BUILD YOUR KIT
                </button>
            </div>
            
            <div className="flex-shrink-0 -translate-x-1/4 sm:translate-x-0">
              <button onClick={() => onNavigate('home')} className="cursor-pointer flex items-center justify-center">
                 <img src="https://ik.imagekit.io/kn6auymih/Untitled-3.png" alt="NailsOrials" className="h-7 sm:h-12 md:h-14 object-contain" />
              </button>
            </div>

            <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center">
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className="hidden lg:flex items-center space-x-2">
                      <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-pink-600">
                          LEARN <ChevronDownIcon className="h-4 w-4 ml-1" />
                      </a>
                      <button onClick={() => onNavigate('blog')} className="text-sm font-medium text-gray-700 hover:text-pink-600">PRODUCT REVIEW</button>
                  </div>
                  <button onClick={() => setIsSearchOpen(true)} className="p-2 text-gray-700 hover:bg-gray-100 rounded-full" aria-label="Open search">
                    <SearchIcon className="h-6 w-6" />
                  </button>
                  <button onClick={() => onNavigate('academy')} className="p-2 text-gray-700 hover:bg-gray-100 rounded-full" aria-label="Open NailsOrials Guide">
                    <BookIcon className="h-6 w-6" />
                  </button>
                  <button onClick={() => onNavigate('blog')} className="p-2 text-gray-700 hover:bg-gray-100 rounded-full" aria-label="Open blog">
                    <BlogIcon className="h-6 w-6" />
                  </button>
                </div>
            </div>
            
          </div>
        </div>
        <nav className="flex justify-center items-center border-t border-gray-200">
          <ul className="flex items-center justify-center flex-wrap gap-x-4 md:gap-x-5 gap-y-1 px-2 py-3">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <button onClick={() => onNavigateToCategory(link.id)} className="text-xs font-semibold tracking-normal text-gray-800 hover:text-pink-500 transition-colors whitespace-nowrap bg-transparent border-none p-0 cursor-pointer">
                  {link.navName}
                </button>
                {link.name === 'Press Ons' && (
                  <span className="absolute -top-2 -right-4 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-md">NEW!</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {isSearchOpen && <SearchWidget onClose={() => setIsSearchOpen(false)} />}
      </header>
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        onNavigate={onNavigate}
        onNavigateToCategory={onNavigateToCategory}
        onBuildKitClick={onBuildKitClick}
      />
    </>
  );
};
