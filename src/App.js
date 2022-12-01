import logo from './logo.svg';
import './App.css';
import { Audio, BallTriangle, Dna, RotatingTriangles } from 'react-loader-spinner';
import Ashok from './images/Ashok img.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarPage from './Components/NavbarPage';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <NavbarPage />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </BrowserRouter>

        {/* <Home /> */}

       
        
       
        
        
      </div>
    </div>
  );
}

export default App;
