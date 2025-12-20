import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Volunteer from '../components/Volunteer';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Volunteer />
            <Contact />
        </main>
    );
};

export default Home;
