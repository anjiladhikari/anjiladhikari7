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


        // 1. Manually grab the data from the form
        const currentForm = formRef.current;
        const templateParams = {
            user_name: currentForm.user_name.value,
            user_email: currentForm.user_email.value,
            subject: currentForm.subject.value,
            message: currentForm.message.value,
        };

        // 2. Send the email
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams, // Pass the object we created above
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                formRef.current.reset();
            }, (error) => {
                console.error("EmailJS Error:", error); // Log the full error for debugging
                setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-[var(--bg-color)] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Get In Touch
                    </h2>
                    <p className="text-[var(--text-color)]/70 max-w-2xl mx-auto">
                        Interested in collaborating or have a project in mind? Let's discuss how we can work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="space-y-8 bg-[var(--card-bg)] p-8 rounded-xl border border-[var(--border-color)] shadow-lg hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] hover:bg-gradient-to-br hover:from-[var(--card-bg)] hover:to-primary/5 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-color)]">Contact Information</h3>
                        <div className="space-y-6">
                            <ContactItem icon={<Mail />} title="Email" value="anjil.adk@gmail.com" />
                            <ContactItem icon={<Phone />} title="Phone" value="+61XXXXXXXX" />
                            <ContactItem icon={<MapPin />} title="Location" value="Geelong, Victoria, Australia" />
                        </div>
                    </motion.div>

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

                            <div>
                                <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject" // Required for EmailJS
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                                    placeholder="Project Inquiry"
                                />
                            </div>

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

// This is the part that was missing in the previous snippet
const ContactItem = ({ icon, title, value }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[var(--card-bg)] text-primary">
            {icon}
        </div>
        <div>
            <h4 className="text-sm font-medium text-[var(--text-color)]/60">{title}</h4>
            <p className="text-lg font-semibold text-[var(--text-color)]">{value}</p>
        </div>
    </div>
);

export default Contact;