import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Main/Hero';
import About from './Components/About/About';
import Approach from './Components/Approach/Approach';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Hero Element is in the Main folder, You can find multiple components in the Hero component */}

        <Route path='/' element={<Hero/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/approach' element={<Approach/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
