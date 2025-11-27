import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
                            <ContactItem icon={<Phone />} title="Phone" value="+61 452 663 945" />
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)]/50 border border-[var(--border-color)] text-[var(--text-color)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10 resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

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
