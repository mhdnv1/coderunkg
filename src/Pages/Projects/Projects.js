import React from 'react';
import HomeProjects from '../Home/HomeProjects/HomeProjects'
import './projects.scss'

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__banner">
                <div className="banner">
                    <p>Передовая IT студия</p>
                    <h1>Мы здесь, чтобы помочь <br/> каждому вашему бизнесу</h1>
                </div>
            </div>
            <HomeProjects/>
        </div>
    );
}

export default Projects;
