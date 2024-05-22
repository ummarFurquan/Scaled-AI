import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import About from './Components/About/About';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
