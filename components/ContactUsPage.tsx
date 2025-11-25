
import React, { useState } from 'react';

export const ContactUsPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messageText, setMessageText] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.trim() || !name.trim() || !messageText.trim() || status === 'submitting') {
            return;
        }

        setStatus('submitting');
        setResponseMessage('');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', messageText);

        try {
            const response = await fetch('https://formspree.io/f/mldajnlo', { // Re-using newsletter endpoint
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
            });
            
            if (response.ok) {
                setStatus('success');
                setResponseMessage("Thank you for your message! We'll get back to you soon. ✨");
                setName('');
                setEmail('');
                setMessageText('');
            } else {
                const data = await response.json();
                if (data.errors) {
                    setResponseMessage(data.errors.map((error: { message: string }) => error.message).join(", "));
                } else if (data.error) {
                    setResponseMessage(data.error);
                } else {
                    setResponseMessage('An error occurred. Please try again.');
                }
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            setResponseMessage('Something went wrong. Please check your connection and try again.');
            console.error('Submission error:', error);
        }
    };

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-tinos text-gray-900 sm:text-5xl">
                        Get in Touch 💖
                    </h1>
                    <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                        We love connecting with fellow nail lovers! Whether you have questions, suggestions, or just want to share your nail art story, we’re here for you.
                    </p>
                </div>
                <div className="mt-12 text-center text-lg text-gray-700 space-y-4">
                    <p>📧 Email: <a href="mailto:nailsorials@support.com" className="text-pink-600 hover:underline">nailsorials@support.com</a></p>
                    <p>📞 Phone: <a href="tel:+13059366501" className="text-pink-600 hover:underline">+1 305-936-6501</a></p>
                    <p className="pt-4 text-gray-600">
                        Or simply fill out the form below, and we’ll sprinkle a little nail magic and get back to you as soon as we can! ✨
                    </p>
                </div>

                <div className="mt-12 max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                                required
                                placeholder="Your Message"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#3e2336] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:bg-gray-400 transition"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    <div className="h-8 mt-4 text-center text-sm">
                        {status === 'success' && <p className="text-green-700 font-semibold">{responseMessage}</p>}
                        {status === 'error' && <p className="text-red-600 font-semibold">{responseMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
