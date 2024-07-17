

import './Styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Product from './Pages/Product';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<About />} />
        <Route path="/Productos" element={<Product />} />
        <Route path="/Contactanos" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
