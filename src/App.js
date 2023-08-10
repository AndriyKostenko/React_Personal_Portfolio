import React, { useState } from 'react';

import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

import './App.css';


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };


  return (
      <div id={theme}>
        <Header value={toggleTheme} checked={theme}/>
        
        <Home value={theme}/>
        <About value={theme}/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Contact value={theme}/>
        
        <Footer/>
        <ScrollUp/>
      </div>

  );
}

export default App;
