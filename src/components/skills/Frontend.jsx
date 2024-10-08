import React from "react";


const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Front-end developer</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">JavaScript: React.js / Next.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">CSS (SASS)</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skills__name">Bootstrap, Gulp, WebPack</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;