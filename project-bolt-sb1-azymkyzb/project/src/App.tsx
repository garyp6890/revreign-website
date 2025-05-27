import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Links from './pages/Links';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AmazonStorefront from './pages/AmazonStorefront';
import WalmartStorefront from './pages/WalmartStorefront';
import Partnerships from './pages/Partnerships';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/links" element={<Links />} />
              <Route path="/amazon" element={<AmazonStorefront />} />
              <Route path="/walmart" element={<WalmartStorefront />} />
              <Route path="/partnerships" element={<Partnerships />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;