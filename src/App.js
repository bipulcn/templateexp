import React, {useState, createContext, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './comp/navbar';
import HomePage from './pags/home';
import CardPage from './pags/card';
import TextPage from './pags/text';
import ButtonPage from './pags/button';
import FormPage from './pags/forms';

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState((localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'light');
  const toggleTheme = () => {
    console.log("Current is : ", theme)
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem('theme', theme);
  }
  useEffect(() => {
    console.log(theme);
  }, [theme])
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id={theme}>
        <BrowserRouter>
          <Navbar method={toggleTheme} value={theme} />
          <div className="container-fluid mt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/text" element={<TextPage />} />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
