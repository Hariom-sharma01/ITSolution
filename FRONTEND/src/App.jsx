import React from 'react';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import About from './pages/About';
import Benefits from './pages/BenefitsPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import ServicesPage1 from './pages/ServicesPage1';
import ServicesPage2 from './pages/ServicesPage2';
import ServicesPage3 from './pages/ServicesPage3';
import ServicesPage4 from './pages/ServicesPage4';
import ServicesPage5 from './pages/ServicesPage5';
import ServicesPage6 from './pages/ServicesPage6';
import ServicesPage7 from './pages/ServicesPage7';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Technologies' element={<Technologies/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Benefits' element={<Benefits/>} />
      <Route path='/ServicesPage1' element={<ServicesPage1/>} />
      <Route path='/ServicesPage2' element={<ServicesPage2/>} />
      <Route path='/ServicesPage3' element={<ServicesPage3/>} />
      <Route path='/ServicesPage4' element={<ServicesPage4/>} />
      <Route path='/ServicesPage5' element={<ServicesPage5/>} />
      <Route path='/ServicesPage6' element={<ServicesPage6/>} />
      <Route path='/ServicesPage7' element={<ServicesPage7/>} />
    </Routes>
  );
}

export default App;
