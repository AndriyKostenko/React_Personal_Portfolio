import React, { useEffect, useState } from "react";

import {projectsData, projectsNav} from './Data';
import WorksItems from "./WorksItems";

import './work.css';


const Works = () => {
    const [item, setItem] = useState({name: "All"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "All") {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            })
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (event, index) => {
        setItem({name: event.target.textContent});
        setActive(index)
    }

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span 
                            onClick={(event) => {
                            handleClick(event, index);
                            }} 
                            className={`${active === index ? 'active-work' : ""} work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorksItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default Works;