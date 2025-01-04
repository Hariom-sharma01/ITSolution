import React from 'react';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import About from './pages/About';
import Benefits from './pages/BenefitsPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Technologies' element={<Technologies/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Benefits' element={<Benefits/>} />
      <Route path='/ServicesPage' element={<ServicesPage/>} />
    </Routes>
  );
}

export default App;
