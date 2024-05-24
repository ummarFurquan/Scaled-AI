import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
