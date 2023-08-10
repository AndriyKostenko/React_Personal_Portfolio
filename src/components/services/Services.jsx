import React, { useState } from "react";

import './services.css';


const Services = () => {
    //setting states for close/open of modal window
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Back-end Developer <br/>
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? 
                                    'services__modal active-modal' :
                                    'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Back-end Developer</h3>
                            <p className="services__modal-description">
                                Service with more than 3 y. of experience.
                                Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Fast and optimized back-end 
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database administration
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Security
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Scalability
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Hosting
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                        Front-end developer <br/>
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? 
                                    'services__modal active-modal' :
                                    'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Front-end developer</h3>
                            <p className="services__modal-description">
                                Service with more than 3 y. of experience.
                                Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Markup with HTML, CSS and JavaScript
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Accessibility
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Asynchronous requests
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Optimization of user experience
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Implementing design on mobile websites
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
