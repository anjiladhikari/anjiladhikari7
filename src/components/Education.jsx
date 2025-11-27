import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Master of Applied Artificial Intelligence",
            institution: "Deakin University",
            location: "Wurns Pond, Geelong, Victoria",
            year: "2024 - Present"
        },
        {
            degree: "Bachelor Of Electrical Engineering",
            institution: "Pulchowk Campus, TU",
            location: "Nepal",
            year: "2016 - 2020"
        }
    ];

    const certifications = [
        "Microsoft Certified: Azure AI Fundamentals",
        "Microsoft Certified: Azure AI Engineer Associate",
        "Bertelsmann Technology Scholarship 2021 for Machine Learning"
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <section id="education" className="py-20 bg-[var(--bg-color)] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Education & Certifications
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-color)] flex items-center gap-2">
                            <GraduationCap className="text-primary" />
                            Academic Background
                        </h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="bg-[var(--card-bg)] p-6 rounded-xl border-l-4 border-primary/50 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] hover:bg-gradient-to-br hover:from-[var(--card-bg)] hover:to-primary/5"
                            >
                                <h4 className="text-xl font-bold text-[var(--text-color)]">{edu.degree}</h4>
                                <p className="text-primary mt-1">{edu.institution}</p>
                                <p className="text-sm text-[var(--text-color)]/60 mt-2">{edu.location}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-color)] flex items-center gap-2">
                            <Award className="text-secondary" />
                            Certifications & Awards
                        </h3>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-[var(--card-bg)] p-8 rounded-xl border border-[var(--border-color)] shadow-lg hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:bg-gradient-to-br hover:from-[var(--card-bg)] hover:to-secondary/5 transition-all duration-300"
                        >
                            <ul className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-[var(--text-color)]/80"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                                        {cert}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
