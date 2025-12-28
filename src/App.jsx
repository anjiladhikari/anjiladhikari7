import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resources from './pages/Resources';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <Router>
      <div className="bg-[var(--bg-color)] min-h-screen text-[var(--text-color)] selection:bg-primary selection:text-white transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resources />} />
        </Routes>

        <footer className="py-8 bg-dark/80 backdrop-blur-sm border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Anjil Adhikari. All rights reserved.</p>
            <div className="hidden md:block w-px h-4 bg-gray-700"></div>
            <VisitorCounter />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
