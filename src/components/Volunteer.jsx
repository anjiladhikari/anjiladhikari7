import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

const Volunteer = () => {
    const volunteers = [
        
         {
            title: "Peer Support Network Mentor SEBE",
            organization: "Deakin University",
            location: "Geelong, Victoria/Hybrid",
            period: "June 2025-Aug 2025",
            description: ""
        },
        {
            title: "Ambassador",
            organization: "Study Geelong",
            location: "Geelong, Victoria",
            period: "Mar 2024- May 2025",
            description: ""
        },
        {
            title: "Volunteer ",
            organization: "Acquaint",
            location: "Remote USA",
            period: "Apr 2023 - Present",
            description: ""
        },
        {
            title: "Volunteer",
            organization: "Robotics Association of Nepal",
            location: "Kathmandu, Nepal",
            period: "Feb 2022 - 2023",
            description: ""
        },
          {
            title: "Volunteer",
            organization: "IEEE Pulchowk Student Branch  ",
            location: "Lalitpur, Nepal",
            period: "Jan 2019 - Dec 2020",
            description: ""
        }
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
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="volunteer" className="py-20 bg-[var(--bg-color)]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Volunteer Work
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[var(--border-color)]" />

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12"
                    >
                        {volunteers.map((vol, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-secondary rounded-full border-4 border-[var(--bg-color)] z-10 mt-6 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                                {/* Content */}
                                <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="bg-[var(--card-bg)] p-6 rounded-xl border-l-4 border-secondary/50 hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:bg-gradient-to-br hover:from-[var(--card-bg)] hover:to-secondary/5"
                                    >
                                        <div className="flex flex-col gap-2 mb-4">
                                            <h3 className="text-xl font-bold text-[var(--text-color)]">{vol.title}</h3>
                                            <h4 className="text-lg text-secondary">{vol.organization}</h4>
                                            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-color)]/60">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {vol.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    {vol.location}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-[var(--text-color)]/80 text-sm leading-relaxed">
                                            {vol.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
