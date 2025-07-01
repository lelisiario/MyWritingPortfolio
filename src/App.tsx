// src/App.tsx (CORRECTED - ensure export default is at the bottom)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Context Provider
import { ActiveSectionProvider } from './context/ActiveSectionContext';

// Import Layout Components
import Header from './components/Header'; // Should now be fine with default export
import Footer from './components/Footer'; // Should now be fine with default export

// Import Page Components
import Home from './pages/Home'; // Should now be fine with default export
import ProjectDetail from './pages/ProjectDetail'; // Should now be fine with default export
import Contact from './pages/Contact'; // Should now be fine with default export

// Optional: Import global CSS specific to App if you create one
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      {/* Wrap the entire application with the ActiveSectionProvider */}
      <ActiveSectionProvider>
        <div className="app-container">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ActiveSectionProvider>
    </Router>
  );
};

export default App;