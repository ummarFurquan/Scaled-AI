import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Main/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { ErrorBoundary } from "react-error-boundary";
import Error from './Components/Error';
import Capabilities from "./Components/Capabilities/Capabilities";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route  exact path="/about" element={<About />} />
        <Route 
        exact
          path="/contact" 
          element={
            <ErrorBoundary FallbackComponent={Error}>
              <Contact />
            </ErrorBoundary>
          } 
        />
        <Route exact path="/capabilities" element={<Capabilities />} />
        <Route exact path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
