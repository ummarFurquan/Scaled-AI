import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Main/Hero";
import About from "./Components/About/About";
import Approach from "./Components/Approach/Approach";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { ErrorBoundary } from "react-error-boundary";
import Error from './Components/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Hero Element is in the Main folder, You can find multiple components in the Hero component */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />

          <Route 
            path="/contact" 
            element={
              <ErrorBoundary fallback={<Error />}>
                <Contact />
              </ErrorBoundary>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
