import React, { useState } from "react";
import Switch from 'react-switch';

import './header.css';


const Header = ({value, checked}) => {
    /*=============== Change Background Header ===============*/
    // when the scroll is higher 200 viewport - adding a new class
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        if (this.scrollY >= 80) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("scroll-header");
        }
    });

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);

    // setting active nav-links
    const [activeNav, setActiveNav] = useState("#home");
  


    return (
    
                <header className="header">
                <nav className="nav container">
                    <a href="#home" className="nav__logo">
                        Andriy
                    </a>

                    <Switch onChange={value} 
                            checked={checked === "light"}
                            offColor="#000000"
                            onColor="#000000"
                            offHandleColor="#ffffff"
                            onHandleColor="#ffffff"
                            uncheckedIcon={
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 20,
                                    color: "yellow",
                                    paddingRight: 2
                                }}>
                                    <i className="uil uil-sun"></i>
                                </div>
                              }
                            checkedIcon={
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 20,
                                    color: "yellow",
                                    paddingRight: 2
                                }}>
                                    <i className="uil uil-moon"></i>
                                </div>
                                
                              }/>  
                    
                    <div className={Toggle ? "nav__menu show-menu" : 
                    "nav__menu"}>
                        {/* deleted grid after nav__list */}
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" 
                                   onClick={() => setActiveNav('#home')} 
                                   className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-estate nav__icon"></i>
                                    Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" 
                                   onClick={() => setActiveNav('#about')} 
                                   className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-user nav__icon"></i>
                                    About
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" 
                                  onClick={() => setActiveNav('#skills')} 
                                  className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-file-alt nav__icon"></i>
                                    Skills
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" 
                                   onClick={() => setActiveNav('#services')} 
                                   className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-briefcase-alt nav__icon"></i>
                                    Services
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" 
                                   onClick={() => setActiveNav('#portfolio')} 
                                   className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-scenery nav__icon"></i>
                                    Portfolio
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" 
                                   onClick={() => setActiveNav('#contact')} 
                                   className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-message nav__icon"></i>
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav__close" 
                           onClick={() => showMenu(!Toggle)}></i>
                    </div>

                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </nav>
        </header>
        


    )
}

export default Header;