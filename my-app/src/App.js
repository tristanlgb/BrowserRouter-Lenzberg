import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './components/Navbar/NavBar';
import Detail from './Pages/Detail/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='*' element={<div>Error</div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App