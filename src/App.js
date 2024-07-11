import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Main/Hero';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './Components/Error';
import Capabilities from './Components/Capabilities/Capabilities';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <ErrorBoundary FallbackComponent={Error}>
                <Contact />
              </ErrorBoundary>
            }
          />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
      <ScrollToTop
      color='#dc3545'
      style={{}}
      />
    </Router>
    </>
  );
}

export default App;
