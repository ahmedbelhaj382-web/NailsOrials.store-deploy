
import React from 'react';
import { ChevronDownIcon } from './Icons';

interface FooterLink {
    name: string;
    page?: string;
}

interface FooterLinkColumnProps {
    title: string;
    links: FooterLink[];
    onNavigate: (page: string) => void;
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links, onNavigate }) => (
    <div>
        <h4 className="font-bold text-white mb-4 tracking-wider">{title}</h4>
        <ul className="space-y-2">
            {links.map(link => (
                <li key={link.name}>
                    {link.page ? (
                         <button onClick={() => onNavigate(link.page!)} className="text-gray-400 hover:text-white text-sm text-left bg-transparent border-none p-0 cursor-pointer">
                            {link.name}
                        </button>
                    ) : (
                        <a href="#" className="text-gray-400 hover:text-white text-sm">{link.name}</a>
                    )}
                </li>
            ))}
        </ul>
    </div>
);


export const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const shopLinks: FooterLink[] = [
        { name: "Build A Kit", page: "build-kit" },
        { name: "Dip Powder" },
        { name: "Gel Polish" },
        { name: "Tools" },
        { name: "Shop All" }
    ];
    const learnLinks: FooterLink[] = [
        { name: "NailsOrials Guide", page: "academy" },
        { name: "Inspiration" },
        { name: "About Us", page: "about" },
        { name: "Community" }
    ];
    const helpLinks: FooterLink[] = [
        { name: "Store Locator", page: "store-locator" },
        { name: "FAQs", page: "faq" },
        { name: "30 Day Guarantee", page: "refund" },
        { name: "Contact Us", page: "contact" }
    ];

    return (
        <footer className="bg-zinc-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        {/* Empty column for alignment, or could place logo/text here */}
                    </div>
                    <FooterLinkColumn title="SHOP" links={shopLinks} onNavigate={onNavigate} />
                    <FooterLinkColumn title="Learn" links={learnLinks} onNavigate={onNavigate} />
                    <FooterLinkColumn title="Help & Support" links={helpLinks} onNavigate={onNavigate} />
                </div>
                <div className="border-t border-gray-700 pt-8">
                    <div className="mb-4">
                        <label htmlFor="country-region" className="text-sm text-gray-400">Country/region</label>
                        <div className="relative mt-1 max-w-xs">
                           <select id="country-region" className="w-full bg-zinc-800 border border-gray-600 rounded-md py-2 px-3 text-white appearance-none pr-8">
                                <option>USD $ | United States</option>
                                <option>CAD $ | Canada</option>
                                <option>EUR € | European Union</option>
                                <option>GBP £ | United Kingdom</option>
                                <option>AUD $ | Australia</option>
                                <option>JPY ¥ | Japan</option>
                                <option>CHF | Switzerland</option>
                            </select>
                            <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 flex flex-col md:flex-row md:space-x-4">
                        <span>©Copyright2025, Nailsorials®All Rights Reserved.</span>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <button onClick={() => onNavigate('refund')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-left">Refund policy</button>
                            <button onClick={() => onNavigate('privacy')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-left">Privacy policy</button>
                            <button onClick={() => onNavigate('terms')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-left">Terms of service</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
