import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[var(--bg-color)] min-h-screen text-[var(--text-color)] selection:bg-primary selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Volunteer />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm bg-dark/80 backdrop-blur-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Anjil Adhikari. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
