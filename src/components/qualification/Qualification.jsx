import React from "react";

import './qualification.css';


const Qualification = () => {


    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>

                    <div className= "qualification__button button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                </div>



                <div className="qualification__sections">

                    <div className="qualification__content"> 
                    <div className="qualification__data">

                        <div className="qualification__block">
                            <h3 className="qualification__title">Full-stack Web developer</h3>
                            <span className="qualification__subtitle">Canada - PathwayPro</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                    2024 - 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        </div>

                        <div className="qualification__data">
                            <div className="qualification__block">
                                <h3 className="qualification__title">Backend Web developer</h3>
                                <span className="qualification__subtitle">Ukraine - Meduzzen</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                        2022 - 2022
                                </div>
                            </div>
                            

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>  

                        <div className="qualification__data">
                            <div className="qualification__block">
                                <h3 className="qualification__title">Full-stack Web developer</h3>
                                <span className="qualification__subtitle">Ukraine - Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                        2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                        </div>

                        
                        <div className="qualification__data">
                            <div className="qualification__block">
                                <h3 className="qualification__title">Frontend Web developer</h3>
                                <span className="qualification__subtitle">Ukraine - CodeExpert</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                        2017 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>



                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div className="qualification__block">
                                <h3 className="qualification__title">Python</h3>
                                <span className="qualification__subtitle">Ukraine - Beetroot Academy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                        2016 - 2017
                                </div>
                            </div>
                        </div>



                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>                       

                            <div className="qualification__block">
                                <h3 className="qualification__title">Marine Navigator</h3>
                                <span className="qualification__subtitle">Ukraine - Maritime Academy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                        2010 - 2016
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
    </section>
    );
};

export default Qualification;