
import React, { useState } from 'react';
import { ArrowRightIcon, InstagramIcon, TiktokIcon, PinterestIcon, TwitterXIcon, YoutubeIcon, ThreadsIcon } from './Icons';

export const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.trim() || status === 'submitting') {
            return;
        }

        setStatus('submitting');
        setMessage('');

        const formData = new FormData();
        formData.append('email', email);

        try {
            const response = await fetch('https://formspree.io/f/mldajnlo', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
            });
            
            if (response.ok) {
                setStatus('success');
                setMessage("Thank you for subscribing! We've received your email.");
                setEmail('');
            } else {
                try {
                    const data = await response.json();
                    if (data.errors) {
                        setMessage(data.errors.map((error: { message: string }) => error.message).join(", "));
                    } else if (data.error) {
                         setMessage(data.error)
                    } else {
                        setMessage('An error occurred with the submission. Please try again.');
                    }
                } catch {
                     setMessage('An error occurred with the submission. Please try again.');
                }
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please check your connection and try again.');
            console.error('Submission error:', error);
        }
    };

    return (
        <div className="bg-[#F8E7F1] py-16 px-4">
            <div className="max-w-xl mx-auto text-center">
                <img src="https://ik.imagekit.io/kn6auymih/logo%20copy.png?updatedAt=1762477260873" alt="Nailsorials Logo" className="h-16 w-auto mx-auto mb-4" />
                <h3 className="text-4xl md:text-5xl font-tinos italic mb-4 text-[#4a2a43]">Make Your Day</h3>
                <p className="text-gray-600 mb-8">Join our circle of Nail lovers. Receive dreamy nail inspo, sweet surprises, and exclusive love-for-nails offers straight to your inbox.</p>
                
                <div className="max-w-md mx-auto relative" style={{ minHeight: '50px' }}>
                    {status !== 'success' && (
                        <form onSubmit={handleSubmit} className="relative">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                disabled={status === 'submitting'}
                                aria-label="Email for newsletter"
                            />
                            <button 
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
                                disabled={status === 'submitting'}
                                aria-label="Subscribe to newsletter"
                            >
                                <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </form>
                    )}
                </div>

                <div className="h-6 text-sm mb-6">
                    {status === 'success' && <p className="text-green-700 font-semibold">{message}</p>}
                    {status === 'error' && <p className="text-red-600 font-semibold">{message}</p>}
                    {status === 'submitting' && <p className="text-gray-600">Submitting...</p>}
                </div>
                
                <div className="flex justify-center space-x-4">
                    <a href="https://www.instagram.com/nailsorials/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black hover:text-pink-600"><InstagramIcon className="w-6 h-6" /></a>
                    <a href="https://www.threads.com/@nailsorials" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-black hover:text-pink-600"><ThreadsIcon className="w-6 h-6" /></a>
                    <a href="https://www.tiktok.com/@nailsorials?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-black hover:text-pink-600"><TiktokIcon className="w-6 h-6" /></a>
                    <a href="https://www.pinterest.com/nailstutorials4u/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-black hover:text-pink-600"><PinterestIcon className="w-6 h-6" /></a>
                    <a href="https://x.com/nailsorials" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-black hover:text-pink-600"><TwitterXIcon className="w-6 h-6" /></a>
                    <a href="https://www.youtube.com/@nailstutorials4u" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-black hover:text-pink-600"><YoutubeIcon className="w-6 h-6" /></a>
                </div>
            </div>
        </div>
    );
}