import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Palette } from 'lucide-react';

const ResourceSection = ({ title, icon: Icon, resources, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <Icon size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[var(--text-color)]">{title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <motion.a
                        key={index}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="block p-6 rounded-xl bg-[var(--card-bg)] border border-white/10 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/20 backdrop-blur-sm group"
                    >
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{resource.name}</h3>
                        <p className="text-gray-400 text-sm">{resource.description}</p>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

const Resources = () => {
    const resourceCategories = [
        {
            title: "Python Development",
            icon: Code,
            resources: [
                { name: "Official Python Docs", description: "The definitive documentation for Python.", link: "https://docs.python.org/3/" },
                { name: "Real Python", description: "High-quality Python tutorials and articles.", link: "https://realpython.com/" },
                { name: "Full Stack Python", description: "Resources for building web apps with Python.", link: "https://www.fullstackpython.com/" }
            ]
        },
        {
            title: "JavaScript & Frontend",
            icon: Code,
            resources: [
                { name: "MDN Web Docs", description: "Resources for developers, by developers.", link: "https://developer.mozilla.org/" },
                { name: "React Documentation", description: "Learn React from the best source.", link: "https://react.dev/" },
                { name: "JavaScript.info", description: "The Modern JavaScript Tutorial.", link: "https://javascript.info/" }
            ]
        },
        {
            title: "Artificial Intelligence",
            icon: Brain,
            resources: [
                { name: "Hugging Face", description: " The AI community building the future.", link: "https://huggingface.co/" },
                { name: "OpenAI Platform", description: "Explore the latest in generative AI.", link: "https://platform.openai.com/" },
                { name: "PyTorch", description: "An open source machine learning framework.", link: "https://pytorch.org/" }
            ]
        },
        {
            title: "CSS & Design",
            icon: Palette,
            resources: [
                { name: "Tailwind CSS", description: "Rapidly build modern websites.", link: "https://tailwindcss.com/" },
                { name: "CSS-Tricks", description: "Tips, tricks, and techniques on using CSS.", link: "https://css-tricks.com/" },
                { name: "Framer Motion", description: "Production-ready motion library for React.", link: "https://www.framer.com/motion/" }
            ]
        },
        {
            title: "Backend Engineering",
            icon: Database,
            resources: [
                { name: "FastAPI", description: "Modern, high-performance web framework for APIs.", link: "https://fastapi.tiangolo.com/" },
                { name: "PostgreSQL", description: "The world's most advanced open source database.", link: "https://www.postgresql.org/" },
                { name: "Docker", description: "Develop, ship, and run any application as a lightweight container.", link: "https://www.docker.com/" }
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[var(--bg-color)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                        Curated Resources
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A collection of tools, libraries, and learning materials that I use and recommend.
                    </p>
                </motion.div>

                {resourceCategories.map((category, index) => (
                    <ResourceSection
                        key={index}
                        title={category.title}
                        icon={category.icon}
                        resources={category.resources}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Resources;
