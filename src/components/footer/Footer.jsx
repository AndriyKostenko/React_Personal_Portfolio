import React from "react";


import './footer.css';


const Footer = () => {


    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__title">Andriy</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/andriy-kostenko-02969021b/" className="footer__social-link" target="_blank" rel="noreferrer"> 
                    <i className="bx bxl-linkedin"></i>
                    </a>
                    

                    <a href="https://www.facebook.com/o.kostenko.ua" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-facebook"></i>
                    </a>
                    

                    <a href="https://github.com/AndriyKostenko" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Andriy Kostenko. All rights reserved.</span>
            </div>
        </footer>
    )
} 


export default Footer;