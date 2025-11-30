import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

    //    email js 
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                formRef.current.reset();
            }, (error) => {
                setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
            })
            .finally(() => {
                setIsSubmitting(false);
                // Clear success message after 5 seconds
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-[var(--bg-color)] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ... Header Section (Unchanged) ... */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* ... Contact Info Section (Unchanged) ... */}

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[var(--card-bg)] backdrop-blur-md p-8 rounded-2xl border border-[var(--border-color)] shadow-2xl shadow-primary/5"
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name" // Required for EmailJS
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email" // Required for EmailJS
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* ... Subject Input (Add name="subject") ... */}

                            <div>
                                <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Message</label>
                                <textarea
                                    name="message" // Required for EmailJS
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {status.message && (
                                <p className={`text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {status.message}
                                </p>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};