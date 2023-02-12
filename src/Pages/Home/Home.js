import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss'
import HomeProjects from './HomeProjects/HomeProjects';
import HomeRequest from './HomeRequest/HomeRequest';
import HomeServices from './HomeServices/HomeServices';
import Standarts from './Standarts/Standarts';


const Home = () => {
    return (
        <div className="home">
            <div className="home__banner">
                <div className="banner">
                    <p>Передовая IT студия</p>
                    <h1>Мы создаем легкие решения <br />
                        сложных задач и проблем</h1>
                    <button className="btn"><Link to='/projects'>Наши проекты</Link></button>
                </div>
            </div>
            <div className="container">
                <HomeServices />
                <button className="btn d-block mx-auto"><Link to='/services'>Все услуги</Link></button>
            </div>
             <Standarts />
             <HomeProjects/>
             <div className="home__video">
                  <div className="container">
                      <div className="content">
                      <h1>Видео о нашей работе</h1>
                   <p>Просто посмотрите, как мы работаем</p>
                   <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/SJjGZv-nGl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                  </div>
             </div>
             <HomeRequest/>
        </div>
    );
}

export default Home;
