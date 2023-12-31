import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

import './home.css';


const Home = ({value}) => {
    return (
        <section className="home  section" id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>

                    <div className="home__img"></div>

                    <Data value={value}/>
                </div>

                <ScrollDown value={value}/>
            </div>
        </section>
    )
}

export default Home;