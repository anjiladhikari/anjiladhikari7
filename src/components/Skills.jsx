import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Terminal, Layout, Server } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="w-6 h-6 text-primary" />,
            skills: ["Python", "C", "C++", "JavaScript", "HTML/CSS", "R", "SQL"]
        },
        {
            title: "AI & ML",
            icon: <Brain className="w-6 h-6 text-secondary" />,
            skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLMs", "Generative AI", "Agentic AI"]
        },
        {
            title: "Libraries & Frameworks",
            icon: <Terminal className="w-6 h-6 text-pink-500" />,
            skills: ["ADK","Pytorch","Scikit-learn", "TensorFlow", "Keras", "Pandas", "Numpy", "NLTK", "OpenCV", "LangChain", "React.js"]
        },
        {
            title: "Tools & Platforms",
            icon: <Server className="w-6 h-6 text-blue-500" />,
            skills: ["Antigravity", "Cursor","Jupyter", "Google Colab", "Git", "Docker", "Azure", "Google Cloud", "Hugging Face", "VS Code"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-[var(--bg-color)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Technical Skills
                    </h2>
                    <p className="text-[var(--text-color)]/70 max-w-2xl mx-auto">
                        A comprehensive toolkit of languages, frameworks, and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="bg-[var(--card-bg)] backdrop-blur-sm rounded-xl p-6 border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] hover:bg-gradient-to-br hover:from-[var(--card-bg)] hover:to-primary/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-[var(--card-bg)] group-hover:bg-primary/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-color)]">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)", boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
                                        className="px-3 py-1 text-sm rounded-full bg-[var(--card-bg)] text-[var(--text-color)]/80 border border-[var(--border-color)] hover:border-primary/50 hover:text-[var(--text-color)] transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
