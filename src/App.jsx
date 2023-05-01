import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Components from './Components';
import XammaMaqol from './components/XammasiMaqollar';
import XammaDoz from './components/XammaDozalrb';
import AloxidaCard from './components/AlozidaCard';
import Reportaj from './components/Reportaj';
import Footer from './components/Footer';
import QoshishSav from './components/SavolQoshish';
import XammaSav from './components/XammaSav';
import XammaFoto from './components/XammaFoto';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Components/>}/>
            <Route path='/xammaMaq' element={<XammaMaqol/>}/>
            <Route path='/xammaDoz' element={<XammaDoz/>}/>
            <Route path='/aloxida' element={<AloxidaCard/>}/>
            <Route path='/aloxida/:id' element={<AloxidaCard/>}/>
            <Route path='/reportaj' element={<Reportaj/>}/>
            <Route path='/savQosh' element={<QoshishSav/>}/>
            <Route path='/xammaSav' element={<XammaSav/>}/>
            <Route path='/xammaFoto' element={<XammaFoto/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;   
