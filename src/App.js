import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './comp/navbar';
import HomePage from './pags/home';
import CardPage from './pags/card';
import TextPage from './pags/text';
import ButtonPage from './pags/button';


function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/text" element={<TextPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
